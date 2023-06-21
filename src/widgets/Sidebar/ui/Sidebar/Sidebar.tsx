import { classNames } from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleCollapsed}>toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={style.languageSwitcher} />
      </div>
    </div>
  );
};
