import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { SelectBox } from 'shared/ui/SelectBox/SelectBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.BYN, content: Currency.BYN },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
  className,
  value,
  onChange,
  readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <SelectBox
      className={classNames('', {}, [className])}
      defaultValue={t('Select currency')}
      label={t('Select currency')}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
