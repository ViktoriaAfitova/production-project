import { classNames } from 'shared/lib/classNames/classNames';
import {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(style.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={style.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={style.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={style.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (<span className={style.caret} style={{ left: `${caretPosition * 9}px` }} />)}
      </div>
    </div>
  );
});
