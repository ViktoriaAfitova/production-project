import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'shared/config/i18n/i18n';
import style from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(style.loginForm, {}, [className])}>
      <Text title={t('Login Form')} />
      {error && <Text text={i18n.t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        className={style.input}
        placeholder={t('Username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={style.input}
        placeholder={t('Password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.Outline}
        className={style.loginButton}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Sign in')}
      </Button>
    </div>
  );
});
