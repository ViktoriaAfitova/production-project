import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, profileActions, profileReducer } from '../store';
import { ValidateProfileError } from '../store/types';
import { updateProfileData } from '../store/thunk';

const data = {
  firstName: 'Viki',
  lastName: 'Afitova',
  age: 37,
  currency: Currency.BYN,
  country: Country.Belarus,
  city: 'Minsk',
  username: 'admin',
};

describe('slice', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('set cancel', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setCancel(),
    )).toEqual({
      readonly: true,
      validateErrors: [],
      data,
      form: data,
    });
  });

  test('set profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: 'Viki',
      },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setProfile({
        username: 'Viktoria',

      }),
    )).toEqual({
      form: { username: 'Viktoria' },
    });
  });

  test('update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setProfile({
        username: 'Viktoria',

      }),
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      ValidateProfileError: undefined,
      form: data,
      data,
    });
  });
});
