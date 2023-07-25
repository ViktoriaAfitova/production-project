import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.loginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={style.input}
        placeholder={t('Username')}
      />
      <Input
        type="text"
        className={style.input}
        placeholder={t('Password')}
      />
      <Button className={style.loginButton}>
        {t('Sign in')}
      </Button>
    </div>
  );
};
