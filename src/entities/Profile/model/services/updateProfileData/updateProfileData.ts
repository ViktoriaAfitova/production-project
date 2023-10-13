import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { selectForm } from '../../selectors/selectors';

export const updateProfileData = createAsyncThunk<
Profile,
void,
ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = selectForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
