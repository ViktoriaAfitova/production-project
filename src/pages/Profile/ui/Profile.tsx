import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VerticalStack } from 'shared/ui/Stack';
import { ProfileEditCard } from 'features/ProfileEditCard';
import { useParams } from 'react-router-dom';

interface ProfileProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfileProps) => {
  const { id } = useParams<{ id: string}>();

  return (
    <Page className={classNames('', {}, [className])}>
      <VerticalStack max gap="16">
        <ProfileEditCard id={id} />
      </VerticalStack>
    </Page>
  );
};

export default ProfilePage;
