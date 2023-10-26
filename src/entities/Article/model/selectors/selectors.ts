import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleDetails = (state: StateSchema) => state.articleDetails?.data;

export const selectArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;

export const selectArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
