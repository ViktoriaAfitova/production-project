import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ValidateProfileError } from './types';
import { selectForm } from './selectors';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
    >(
      'profile/fetchProfileData',
      async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
          const response = await extra.api.get<Profile>(`/profile/${profileId}`);

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (error) {
          return rejectWithValue('error');
        }
      },
    );

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    firstName, lastName, age, country,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
      'profile/updateProfileData',
      async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = selectForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
          return rejectWithValue(errors);
        }

        try {
          const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData,
          );

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (error) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
      },
    );
