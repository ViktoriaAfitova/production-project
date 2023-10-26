import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarLinks } from 'widgets/Sidebar/model/types';
import style from './SidebarItem.module.scss';

interface SidebarItemProps {
  link: SidebarLinks;
  collapsed: boolean;
  className?: string;
}

export const SidebarItem = memo(({ link, collapsed, className }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (link.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      color={AppLinkColor.Secondary}
      to={link.path}
      className={classNames(style.link, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <link.Icon className={style.icon} />
      <span className={style.text}>{t(link.text)}</span>
    </AppLink>
  );
});
