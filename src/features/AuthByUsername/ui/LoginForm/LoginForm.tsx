import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'shared/config/i18n/i18n';
import {
  selectError,
  selectLoading,
  selectPassword,
  selectUsername,
} from 'features/AuthByUsername/model/selectors';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from 'features/AuthByUsername/model/thunk';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import style from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
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
    </DynamicModuleLoader>

  );
});

export default LoginForm;
