import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import style from './AppLink.module.scss';

export enum AppLinkColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Red = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, className, children, color = AppLinkColor.Primary,
  } = props;

  return (
    <Link
      to={to}
      className={classNames(style.applink, {}, [className, style[color]])}
    >
      {children}
    </Link>
  );
};
