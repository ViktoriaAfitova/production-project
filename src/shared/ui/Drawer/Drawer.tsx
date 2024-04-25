import { ReactNode } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers';
import { useModal } from 'shared/lib/hooks/useModal';
import style from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = ({
  className,
  children,
  isVisible,
  onClose,
  lazy,
}: DrawerProps) => {
  const { isClosing, isMounted, close } = useModal({
    animationDelay: 300,
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
      <div className={classNames(style.drawer, modes, [className, theme, 'appDrawer'])}>
        <Overlay onClick={close} />
        <div className={style.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
