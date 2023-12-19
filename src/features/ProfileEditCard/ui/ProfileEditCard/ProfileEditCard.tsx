import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { t } from 'i18next';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { VerticalStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  selectError,
  selectForm,
  selectLoading,
  selectReadonly,
  selectValidateErrors,
} from '../../store/selectors';
import { profileActions, profileReducer } from '../../store';
import { ValidateProfileError } from '../../store/types';
import { fetchProfileData } from '../../store/thunk';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

const reducers: ReducerList = {
  profile: profileReducer,
};

export interface ProfileEditCardProps {
  className?: string;
  id?: string;
}

export const ProfileEditCard = ({
  className,
  id,
}: ProfileEditCardProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(selectForm);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const readonly = useSelector(selectReadonly);
  const validateErrors = useSelector(selectValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Required firstname and lastname'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.NO_DATA]: t('Data not provided'),
  };

  useEffect(() => {
    // if (__PROJECT__ !== 'storybook') {
    if (id) {
      dispatch(fetchProfileData(id));
    }
    // }
  }, [dispatch, id]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.setProfile({ firstName: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.setProfile({ lastName: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.setProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.setProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.setProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.setProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.setProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.setProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ProfileHeader />
      <VerticalStack max gap="8" className={classNames('', {}, [className])}>
        {validateErrors?.length && validateErrors.map((error: ValidateProfileError) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
            data-testid="ProfileEditCard.Error"
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={loading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VerticalStack>
    </DynamicModuleLoader>
  );
};
