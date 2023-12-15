import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsPageSchema } from 'pages/ArticlesDetails';
import { CommentFormSchema } from 'features/CommentForm';
import { ArticlesSchema } from 'pages/Articles';
import { ScrollSchema } from 'widgets/Scroll/model/types/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/ProfileEditCard/store';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scroll: ScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  commentForm?: CommentFormSchema;
  articles?: ArticlesSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - mounted, false - unmounted
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArguments{
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArguments;
  state: StateSchema;
}
