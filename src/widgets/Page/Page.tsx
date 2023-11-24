import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, memo, useEffect, useRef, UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectScrollPath } from 'widgets/Scroll';
import { scrollActions } from 'widgets/Scroll/model/slice/slice';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
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
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => selectScrollPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollActions.setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(style.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
