import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency/model/constants/constants';
import { Country } from 'entities/Country';
import {
  selectProfile,
  selectError,
  selectForm,
  selectLoading,
  selectReadonly,
  selectValidateErrors,
} from '../store/selectors';
import { ValidateProfileError } from '../store/constants';

const data = {
  firstName: 'Viki',
  lastName: 'Afitova',
  age: 37,
  currency: Currency.BYN,
  country: Country.Belarus,
  city: 'Minsk',
  username: 'admin',
};

describe('selectors', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(selectProfile(state as StateSchema)).toEqual(data);
  });
  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfile(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };
    expect(selectError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectError(state as StateSchema)).toEqual(undefined);
  });

  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(selectForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectForm(state as StateSchema)).toEqual(undefined);
  });

  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(selectLoading(state as StateSchema)).toEqual(true);
  });
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoading(state as StateSchema)).toEqual(false);
  });

  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(selectReadonly(state as StateSchema)).toEqual(true);
  });
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectReadonly(state as StateSchema)).toEqual(false);
  });

  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.NO_DATA,
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.INCORRECT_COUNTRY,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    };
    expect(selectValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
