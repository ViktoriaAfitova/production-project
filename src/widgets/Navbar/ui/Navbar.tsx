import { classNames } from 'shared/lib/classNames/classNames';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        /
      </div>
    </div>
  );
}
