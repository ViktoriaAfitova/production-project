import { ReactNode } from 'react';
import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers';
import style from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = ({
  className,
  children,
  isOpen,
  onClose,
}: DrawerProps) => {
  const { theme } = useTheme();

  const modes: Modes = {
    [style.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(style.drawer, modes, [className, theme, 'appDrawer'])}>
        <Overlay onClick={onClose} />
        <div className={style.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
