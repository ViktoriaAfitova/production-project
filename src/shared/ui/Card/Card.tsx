import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo, HTMLAttributes } from 'react';
import style from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo(({
  className,
  children,
  ...otherProps
}: CardProps) => (
  <div
    className={classNames(style.card, {}, [className])}
    {...otherProps}
  >
    {children}
  </div>
));
