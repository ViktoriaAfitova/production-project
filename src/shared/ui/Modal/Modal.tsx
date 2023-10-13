import {
  MutableRefObject,
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers';
import style from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className,
  children,
  isVisible,
  onClose,
  lazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true);
    }
  }, [isVisible]);

  const handleModalClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleModalClose();
    }
  }, [handleModalClose]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isVisible, onKeyDown]);

  const modes : Modes = {
    [style.visible]: isVisible,
    [style.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(style.modal, modes, [className, theme, 'appModal'])}>
        <div
          className={style.overlay}
          onClick={handleModalClose}
        >
          <div
            className={style.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
