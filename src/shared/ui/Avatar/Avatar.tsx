import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import style from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({
  className,
  src,
  size,
  alt,
}: AvatarProps) => {
  const modes: Modes = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      className={classNames(style.avatar, modes, [className])}
      alt={alt}
    />
  );
};
