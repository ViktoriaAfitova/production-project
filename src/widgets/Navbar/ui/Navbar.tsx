import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink
          color={AppLinkColor.Secondary}
          to="/"
          className={style.mainLink}
        >
          Home
        </AppLink>
        <AppLink color={AppLinkColor.Secondary} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
}
