import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import style from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };
  const optionList = useMemo(() => options?.map((optionItem) => (
    <option
      key={optionItem.value}
      className={style.option}
      value={optionItem.value}
    >
      {optionItem.content}
    </option>
  )), [options]);

  const modes: Modes = {};

  return (
    <div className={classNames(style.selectContainer, modes, [className])}>
      {label && (
        <span className={style.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={style.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};
