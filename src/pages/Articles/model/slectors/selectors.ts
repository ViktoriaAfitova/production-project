import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

export const selectIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const selectError = (state: StateSchema) => state.articles?.error;
export const selectView = (state: StateSchema) => state.articles?.view || ArticleView.VIEW_SMALL;
export const selectPage = (state: StateSchema) => state.articles?.page || 1;
export const selectLimit = (state: StateSchema) => state.articles?.limit || 9;
export const selectHasMore = (state: StateSchema) => state.articles?.hasMore;
export const selectInited = (state: StateSchema) => state.articles?._inited;
export const selectOrder = (state: StateSchema) => state.articles?.order ?? 'asc';
export const selectSort = (state: StateSchema) => state.articles?.sort ?? ArticleSortField.CREATED_AT;
export const selectSearch = (state: StateSchema) => state.articles?.search ?? '';
export const selectType = (state: StateSchema) => state.articles?.type ?? ArticleType.ALL;
