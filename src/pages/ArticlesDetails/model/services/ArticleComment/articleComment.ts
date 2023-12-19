import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { selectArticleDetails } from 'entities/Article/model/selectors/selectors';
import { selectUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const articleComment = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/articleComment',
  async (text, thunkApi) => {
    const {
      extra,
      dispatch,
      rejectWithValue,
      getState,
    } = thunkApi;

    const userData = selectUserAuthData(getState());
    const article = selectArticleDetails(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
