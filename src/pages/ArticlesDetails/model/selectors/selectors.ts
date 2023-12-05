import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading;
};
export const selectArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.error;
};
export const selectArticleRecommendationsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations?.isLoading;
};
export const selectArticleRecommendationsError = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations.error;
};
