import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers';
import style from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme?: TextTheme,
}

export const Text = ({
  className,
  title,
  text,
  theme = TextTheme.DEFAULT,
}: TextProps) => (
  <div className={classNames(style.text, { [style[theme]]: true }, [className])}>
    {title && <p className={style.title}>{title}</p>}
    {text && <p className={style.text}>{text}</p>}
  </div>
);
