import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  selectLimit, selectOrder, selectPage, selectSearch, selectSort, selectType,
} from '../../slectors/selectors';

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesProps,
  ThunkConfig<string>
>(
  'articles/fetchArticles',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const page = selectPage(getState());
    const limit = selectLimit(getState());
    const sort = selectSort(getState());
    const order = selectOrder(getState());
    const search = selectSearch(getState());
    const type = selectType(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
