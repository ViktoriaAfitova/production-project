import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfileProps) => {
  const { t } = useTranslation('home');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('Profile')}
      </div>
    </DynamicModuleLoader>

  );
};

export default ProfilePage;
