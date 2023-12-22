import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import style from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({
  className,
  onClick,
}: OverlayProps) => {
  return (
    <div onClick={onClick} className={classNames(style.overlay, {}, [className])} />
  );
});
