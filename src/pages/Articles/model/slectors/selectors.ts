import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const selectIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const selectError = (state: StateSchema) => state.articles?.error;
export const selectView = (state: StateSchema) => state.articles?.view || ArticleView.VIEW_SMALL;
