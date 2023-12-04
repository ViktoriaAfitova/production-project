import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
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
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      if (orderFromUrl) {
        dispatch(articlesActions.setOrder(orderFromUrl));
      }

      if (sortFromUrl) {
        dispatch(articlesActions.setSort(sortFromUrl));
      }

      if (searchFromUrl) {
        dispatch(articlesActions.setSearch(searchFromUrl));
      }

      if (typeFromUrl) {
        dispatch(articlesActions.setType(typeFromUrl));
      }

      dispatch(articlesActions.initialState());
      dispatch(fetchArticles({}));
    }
  },
);
