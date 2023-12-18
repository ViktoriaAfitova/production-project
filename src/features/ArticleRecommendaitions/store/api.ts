import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery;
