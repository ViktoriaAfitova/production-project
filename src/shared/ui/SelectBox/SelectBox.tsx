import { Fragment, ReactNode } from 'react';
import { Listbox as Select } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/direction';
import style from './SelectBox.module.scss';
import { Button } from '../Button/Button';
import { HorizontalStack } from '../Stack';

export interface SelectBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface SelectBoxProps {
  items?: SelectBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const directionMapper: Record<DropdownDirection, string> = {
  'bottom left': style.optionsBottomLeft,
  'bottom right': style.optionsBottomRight,
  'top right': style.optionsTopRight,
  'top left': style.optionsTopLeft,
};

export function SelectBox({
  className,
  items,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom right',
  label,
}: SelectBoxProps) {
  const styles = [directionMapper[direction]];
  return (
    <HorizontalStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <Select
        as="div"
        className={classNames(style.select, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >

        <Select.Button
          disabled={readonly}
          className={style.button}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </Select.Button>
        <Select.Options className={classNames(style.optionsList, {}, styles)}>
          {items?.map((item) => (
            <Select.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    style.optionItem,
                    {
                      [style.active]: active,
                      [style.disabled]: item.disabled,
                    },
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    </HorizontalStack>
  );
}
