import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import style from './Sidebar.module.scss';
import { selectSidebarLinks } from '../../model/selectors';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarLinks = useSelector(selectSidebarLinks);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  const itemsList = useMemo(() => sidebarLinks.map((link) => (
    <SidebarItem
      link={link}
      collapsed={collapsed}
      key={link.path}
    />
  )), [collapsed, sidebarLinks]);

  return (
    <menu
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
        {collapsed ? '>' : '<'}
      </Button>
      <div className={style.links}>
        {itemsList}
      </div>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          short={collapsed}
          className={style.languageSwitcher}
        />
      </div>
    </menu>
  );
});
