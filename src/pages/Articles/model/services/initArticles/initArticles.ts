import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/sortOrder';
import { selectInited } from '../../slectors/selectors';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticles = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articles/initArticles',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = selectInited(getState());

    if (!inited) {
      const orderFormUrl = searchParams.get('order') as SortOrder;
      const sortFormUrl = searchParams.get('sort') as ArticleSortField;
      const searchFormUrl = searchParams.get('search');

      if (orderFormUrl) {
        dispatch(articlesActions.setOrder(orderFormUrl));
      }

      if (sortFormUrl) {
        dispatch(articlesActions.setSort(sortFormUrl));
      }

      if (searchFormUrl) {
        dispatch(articlesActions.setSearch(searchFormUrl));
      }

      dispatch(articlesActions.initialState());
      dispatch(fetchArticles({}));
    }
  },
);
