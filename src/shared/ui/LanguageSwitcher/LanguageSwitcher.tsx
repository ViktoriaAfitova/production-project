import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './LanguageSwitcher.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleTranslation = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(style.languageSwitcher, {}, [className])}
      theme={ThemeButton.Clear}
      onClick={toggleTranslation}
    >
      {t('Language')}
    </Button>
  );
}
