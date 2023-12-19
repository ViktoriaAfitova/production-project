import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
  >(
    'articleDetails/fetchArticleById',
    async (articleId, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;

      try {
        if (!articleId) {
          throw Error('Article not found');
        }
        const response = await extra.api.get<Article>(`/articles/${articleId}`, {
          params: {
            _expand: 'user',
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
