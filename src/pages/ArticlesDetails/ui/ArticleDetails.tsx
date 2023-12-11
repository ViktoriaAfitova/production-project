import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from 'features/CommentForm';
import { Page } from 'widgets/Page/Page';
import { VerticalStack } from 'shared/ui/Stack';
import style from './ArticleDetails.module.scss';
import { selectArticleComments } from '../model/slice/articleDetailsCommentSlice';
import { selectArticleCommentsIsLoading, selectArticleRecommendationsIsLoading } from '../model/selectors/selectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleComment } from '../model/services/ArticleComment/articleComment';
import { selectArticleRecommendations } from '../model/slice/articleDetailsRecommendationSlice';
import { fetchArticleRecommendations } from '../model/services/fetchArticlesRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsHeader } from './ArticleDetailsHeader/ArticleDetailsHeader';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const articleComments = useSelector(selectArticleComments.selectAll);
  const articleCommentsIsLoading = useSelector(selectArticleCommentsIsLoading);
  const articleRecommendations = useSelector(selectArticleRecommendations.selectAll);
  const articleRecommendationsIsLoading = useSelector(selectArticleRecommendationsIsLoading);

  const onSendText = useCallback((text: string) => {
    dispatch(articleComment(text));
  }, [dispatch]);

  // useInitialEffect from hooks
  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, [dispatch, id]);

  if (!id) {
    return (
      <Page className={classNames(style.articleDetails, {}, [className])}>
        {t('Article not found')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(style.articleDetails, {}, [className])}>
        <VerticalStack max gap="16">
          <ArticleDetailsHeader />
          <ArticleDetails id={id} />
          <Text
            size={TextSize.L}
            className={style.title}
            title={t('Recommend')}
          />
          <ArticleList
            view={ArticleView.VIEW_SMALL}
            className={style.recommendations}
            articles={articleRecommendations}
            isLoading={articleRecommendationsIsLoading}
            target="_blank"
          />
          <Text
            size={TextSize.L}
            className={style.title}
            title={t('Comments')}
          />
          <CommentForm onSendText={onSendText} />
          <CommentList
            isLoading={articleCommentsIsLoading}
            comments={articleComments}
          />
        </VerticalStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
