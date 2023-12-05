import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
