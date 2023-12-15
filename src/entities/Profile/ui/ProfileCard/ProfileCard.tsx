import { Modes, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'widgets/Loader/ui/Loader';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { HorizontalStack, VerticalStack } from 'shared/ui/Stack';
import style from './ProfileCard.module.scss';
import { Profile } from '../../model/types';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HorizontalStack
        max
        justify="center"
        className={classNames(style.profileCard, { [style.loading]: true }, [className])}
      >
        <Loader />
      </HorizontalStack>
    );
  }

  if (error) {
    return (
      <HorizontalStack
        max
        justify="center"
        className={classNames(style.profileCard, {}, [className, style.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Something went wrong')}
          text={t('Reload the page')}
          align={TextAlign.CENTER}
        />
      </HorizontalStack>
    );
  }

  const modes: Modes = {
    [style.editing]: !readonly,
  };

  return (
    <VerticalStack
      max
      gap="8"
      className={classNames(style.profileCard, modes, [className])}
    >
      {data?.avatar && (
        <HorizontalStack
          max
          justify="center"
          className={style.imageContainer}
        >
          <Avatar src={data?.avatar} />
        </HorizontalStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('Your Firstname')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastName}
        placeholder={t('Your Lastame')}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Your age')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Your city')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <CurrencySelect
        className={style.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={style.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Enter your username')}
        className={style.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Avatar')}
        className={style.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
    </VerticalStack>
  );
};
