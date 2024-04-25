import { ReactNode } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers';
import { useModal } from 'shared/lib/hooks/useModal';
import style from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

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
  const { isClosing, isMounted, close } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isVisible,
  });
  const { theme } = useTheme();

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
        <Overlay onClick={close} />
        <div
          className={style.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
