import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo, HTMLAttributes } from 'react';
import style from './Card.module.scss';

export enum CardTheme {
  DEFAULT = 'default',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo(({
  className,
  children,
  theme = CardTheme.DEFAULT,
  ...otherProps
}: CardProps) => (
  <div
    className={classNames(style.card, {}, [className, style[theme]])}
    {...otherProps}
  >
    {children}
  </div>
));
