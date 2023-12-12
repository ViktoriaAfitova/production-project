import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'sizeS',
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

type HeaderTag = 'h1' | 'h2' | 'h3';

const headerTagMapper: Record<TextSize, HeaderTag> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.DEFAULT,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => {
  const HeaderTag = headerTagMapper[size];

  const modes: Modes = {
    [style[theme]]: true,
    [style[align]]: true,
    [style[size]]: true,
  };

  return (
    <div className={classNames(style.text, modes, [className])}>
      {title && <HeaderTag className={style.title}>{title}</HeaderTag>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
