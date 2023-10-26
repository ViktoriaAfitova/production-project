import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  profileActions, selectProfile, selectReadonly, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import style from './ProfileHeader.module.scss';

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
    <div className={classNames(style.profileHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={style.wrapperButtons}>
          {readonly ? (
            <Button
              className={style.editButton}
              theme={ButtonTheme.Outline}
              onClick={onEdit}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                className={style.editButton}
                theme={ButtonTheme.OutlineRed}
                onClick={onCancel}
              >
                {t('Cancel')}
              </Button>
              <Button
                className={style.saveButton}
                theme={ButtonTheme.Outline}
                onClick={onSave}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}

    </div>
  );
};
