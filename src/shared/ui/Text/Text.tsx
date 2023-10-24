import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'sizeM',
  L = 'sizeL',
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme?: TextTheme,
  align?: TextAlign,
  size?: TextSize,
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.DEFAULT,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => {
  const modes: Modes = {
    [style[theme]]: true,
    [style[align]]: true,
    [style[size]]: true,
  };
  return (
    <div className={classNames(style.text, modes, [className])}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
