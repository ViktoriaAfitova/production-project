import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  selectHasMore, selectIsLoading, selectPage,
} from '../../slectors/selectors';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articles/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = selectHasMore(getState());
    const page = selectPage(getState());
    const isLoading = selectIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesActions.setPage(page + 1));
      dispatch(fetchArticles({
        page: page + 1,
      }));
    }
  },
);
