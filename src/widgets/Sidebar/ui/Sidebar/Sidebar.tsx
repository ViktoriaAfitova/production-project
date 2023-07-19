import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkColor } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/homeIcon.svg";
import AboutIcon from "shared/assets/icons/aboutIcon.svg";
import style from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleCollapsed}
        className={style.collapseButton}
        theme={ButtonTheme.BackgroundInverted}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={style.links}>
        <AppLink
          color={AppLinkColor.Secondary}
          to={RoutePath.home}
          className={style.link}
        >
          <HomeIcon className={style.icon} />
          <span className={style.text}>{t("Home")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={style.link}>
          <AboutIcon className={style.icon} />
          <span className={style.text}>{t("About")}</span>
        </AppLink>
      </div>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          short={collapsed}
          className={style.languageSwitcher}
        />
      </div>
    </div>
  );
}
