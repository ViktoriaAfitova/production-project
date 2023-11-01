import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { selectLimit } from '../../slectors/selectors';

interface FetchArticlesProps {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesProps,
  ThunkConfig<string>
>(
  'articles/fetchArticles',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page = 1 } = props;
    const limit = selectLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
