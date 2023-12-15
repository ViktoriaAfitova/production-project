import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';

jest.mock('../model/services/fetchArticles/fetchArticles');

describe('thunk', () => {
  test('success request', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalled();
  });

  test('request not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
