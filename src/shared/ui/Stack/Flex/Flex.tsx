import { ReactNode } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import style from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyStyles: Record<FlexJustify, string> = {
  start: style.justifyStart,
  center: style.justifyCenter,
  end: style.justifyEnd,
  between: style.justifyBetween,
};

const alignStyles: Record<FlexAlign, string> = {
  start: style.alignStart,
  center: style.alignCenter,
  end: style.alignEnd,
};

const directionStyles: Record<FlexDirection, string> = {
  row: style.directionRow,
  column: style.directionColumn,
};

const gapStyles: Record<FlexGap, string> = {
  4: style.gap4,
  8: style.gap8,
  16: style.gap16,
  32: style.gap32,
};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
}: FlexProps) => {
  const styles = [
    className,
    justifyStyles[justify],
    alignStyles[align],
    directionStyles[direction],
    gap && gapStyles[gap],
  ];

  const modes: Modes = {
    [style.max]: max,
  };

  return (
    <div className={classNames(style.flex, modes, styles)}>
      {children}
    </div>
  );
};
