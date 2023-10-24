import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import style from './AppLink.module.scss';

export enum AppLinkColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Red = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
  children?: ReactNode;
}

export const AppLink = memo(({
  to, className, children, color = AppLinkColor.Primary,
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames(style.appLink, {}, [className, style[color]])}
  >
    {children}
  </Link>
));
