import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import style from './Button.module.scss';

export enum ButtonTheme {
  Clear = 'clear',
  ClearInverted = 'clearInverted',
  Outline = 'outline',
  OutlineRed = 'outlineRed',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo(({
  className,
  theme = ButtonTheme.Outline,
  children,
  square,
  size = ButtonSize.M,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const modes: Modes = {
    [style[theme]]: true,
    [style.square]: square,
    [style[size]]: true,
    [style.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(style.button, modes, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
