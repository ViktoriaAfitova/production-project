import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from 'features/CommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import style from './ArticleDetails.module.scss';
import { articleDetailsCommentsReducer, selectArticleComments } from '../model/slice/articleDetailsCommentSlice';
import { selectArticleCommentsIsLoading } from '../model/selectors/selectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleComment } from '../model/services/ArticleComment/articleComment';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const articleComments = useSelector(selectArticleComments.selectAll);
  const articleCommentsIsLoading = useSelector(selectArticleCommentsIsLoading);
  const navigate = useNavigate();

  const onBackToArticles = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendText = useCallback((text: string) => {
    dispatch(articleComment(text));
  }, [dispatch]);

  // useInitialEffect from hooks
  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
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
        <Button
          onClick={onBackToArticles}
          theme={ButtonTheme.Outline}
        >
          {t('Back to articles')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={style.title} title={t('Comments')} />
        <CommentForm onSendText={onSendText} />
        <CommentList
          isLoading={articleCommentsIsLoading}
          comments={articleComments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
