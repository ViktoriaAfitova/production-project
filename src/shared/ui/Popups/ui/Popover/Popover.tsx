import { Popover as PopoverBox } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/direction';
import { classNames } from 'shared/lib/classNames/classNames';
import { directionMapper } from '../../utils/utils';
import popupStyle from '../../Popup.module.scss';
import style from './Popover.module.scss';

interface PopoverProps{
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover({
  className,
  direction = 'bottom right',
  trigger,
  children,
}: PopoverProps) {
  const styles = [directionMapper[direction]];
  return (
    <PopoverBox className={classNames(style.popover, {}, [className, popupStyle.popup])}>
      <PopoverBox.Button className={popupStyle.button}>
        {trigger}
      </PopoverBox.Button>
      <PopoverBox.Panel className={classNames(style.panel, {}, styles)}>
        {children}
      </PopoverBox.Panel>
    </PopoverBox>
  );
}
