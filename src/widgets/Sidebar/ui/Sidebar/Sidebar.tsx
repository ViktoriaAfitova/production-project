import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { Button } from 'shared/ui/Button/Button';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
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
      <Button onClick={toggleCollapsed}>toggle</Button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={style.languageSwitcher} />
      </div>
    </div>
  );
}
