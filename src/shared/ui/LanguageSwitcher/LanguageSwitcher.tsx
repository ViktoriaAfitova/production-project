import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export function LanguageSwitcher({ className, short }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggleTranslation = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.Clear}
      onClick={toggleTranslation}
    >
      {t(short ? "abbreviations" : "Language")}
    </Button>
  );
}
