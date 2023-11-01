import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import style from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({
  className,
  children,
  onScrollEnd,
}: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(style.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
