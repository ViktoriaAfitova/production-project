import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectError, selectLoading, selectProfile } from 'entities/Profile/model/selectors';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import style from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const profile = useSelector(selectProfile);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={classNames(style.profileCard, {}, [className])}>
      <div className={style.header}>
        <Text title={t('Profile')} />
        <Button
          className={style.editButton}
          theme={ButtonTheme.Outline}
        >
          {t('Edit')}
        </Button>
      </div>
      <div className={style.data}>
        <Input
          value={profile?.firstName}
          placeholder={t('Your Firstname')}
          className={style.input}
        />
        <Input
          value={profile?.lastName}
          placeholder={t('Your Lastame')}
          className={style.input}
        />
      </div>
    </div>
  );
};
