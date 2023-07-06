import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';

export enum ThemeButton {
  Clear = 'clear',
  Outline = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, theme, children, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(style.button, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
