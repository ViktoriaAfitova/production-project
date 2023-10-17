import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import style from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
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
});
