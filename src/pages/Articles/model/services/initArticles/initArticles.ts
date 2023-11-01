import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectInited } from '../../slectors/selectors';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticles = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articles/initArticles',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = selectInited(getState());

    if (!inited) {
      dispatch(articlesActions.initialState());
      dispatch(fetchArticles({
        page: 1,
      }));
    }
  },
);
