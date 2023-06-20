import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { AppLink, AppLinkColor } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={style.links}>
        <AppLink
          color={AppLinkColor.Secondary}
          to={"/"}
          className={style.mainLink}
        >
          Home
        </AppLink>
        <AppLink color={AppLinkColor.Secondary} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
