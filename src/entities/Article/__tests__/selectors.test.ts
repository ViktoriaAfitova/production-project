import { StateSchema } from 'app/providers/StoreProvider';
import {
  selectArticleDetailsArticle, selectArticleDetailsIsLoading, selectArticleDetailsError,
} from '../model/selectors/selectors';

describe('selectors', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(selectArticleDetailsArticle(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectArticleDetailsArticle(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(selectArticleDetailsError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});
