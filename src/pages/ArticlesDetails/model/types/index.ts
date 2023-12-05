import { ArticleDetailsCommentSchema } from './articleDetailsCommentSchema';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
