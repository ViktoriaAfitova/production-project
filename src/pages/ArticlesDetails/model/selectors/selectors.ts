import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectArticleDetails } from 'entities/Article';
import { selectUserAuthData } from 'entities/User';

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

export const selectEditArticle = createSelector(
  selectArticleDetails,
  selectUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.userId.id === user.id;
  },
);
