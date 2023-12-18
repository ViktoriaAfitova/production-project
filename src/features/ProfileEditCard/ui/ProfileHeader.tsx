import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HorizontalStack } from 'shared/ui/Stack';
import { selectProfile, selectReadonly } from 'features/ProfileEditCard/store/selectors';
import { profileActions } from 'features/ProfileEditCard/store';
import { updateProfileData } from 'features/ProfileEditCard/store/thunk';

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);
  const profile = useSelector(selectProfile);
  const canEdit = authData?.id === profile?.id;
  const readonly = useSelector(selectReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.setCancel());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HorizontalStack
      max
      justify="between"
      className={classNames('', {}, [className])}
    >
      <Text title={t('Profile')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              theme={ButtonTheme.Outline}
              onClick={onEdit}
              data-testid="ProfileHeader.EditButton"
            >
              {t('Edit')}
            </Button>
          ) : (
            <HorizontalStack gap="8">
              <Button
                theme={ButtonTheme.OutlineRed}
                onClick={onCancel}
                data-testid="ProfileHeader.CancelButton"
              >
                {t('Cancel')}
              </Button>
              <Button
                theme={ButtonTheme.Outline}
                onClick={onSave}
                data-testid="ProfileHeader.SaveButton"
              >
                {t('Save')}
              </Button>
            </HorizontalStack>
          )}
        </div>
      )}
    </HorizontalStack>
  );
};
