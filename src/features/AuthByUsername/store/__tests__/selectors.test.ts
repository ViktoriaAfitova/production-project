import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  selectLoading, selectError, selectPassword, selectUsername,
} from '../../store/selectors';

describe('selectors', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };
    expect(selectUsername(state as StateSchema)).toEqual('admin');
  });
  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectUsername(state as StateSchema)).toEqual('');
  });
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123456',
      },
    };
    expect(selectPassword(state as StateSchema)).toEqual('123456');
  });
  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectPassword(state as StateSchema)).toEqual('');
  });
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(selectLoading(state as StateSchema)).toEqual(true);
  });
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoading(state as StateSchema)).toEqual(false);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(selectError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectError(state as StateSchema)).toEqual(undefined);
  });
});
