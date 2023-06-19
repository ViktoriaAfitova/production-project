import { classNames } from "shared/lib/classNames/classNames";
import style from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkColor {
  Primary = "primary",
  Secondary = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, color = AppLinkColor.Primary } = props;

  return (
    <Link
      to={to}
      className={classNames(style.applink, {}, [className, style[color]])}
    >
      {children}
    </Link>
  );
};
