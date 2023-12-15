import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VerticalStack } from 'shared/ui/Stack';
import { ProfileEditCard } from 'features/ProfileEditCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

interface ProfileProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfileProps) => {
  const { id } = useParams<{ id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    <Text text={t('Profile not found')} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VerticalStack max gap="16">
        <ProfileEditCard id={id} />
      </VerticalStack>
    </Page>
  );
};

export default ProfilePage;
