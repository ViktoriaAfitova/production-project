import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import style from './ArticleDetails.module.scss';
import { articleDetailsCommentsReducer, selectArticleComments } from '../model/slice/articleDetailsCommentSlice';
import { selectArticleCommentsIsLoading } from '../model/selectors/selectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

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

  // useInitialEffect from hooks
  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return (
      <div className={classNames(style.articleDetails, {}, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(style.articleDetails, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={style.title} title={t('Comments')} />
        <CommentList
          isLoading={articleCommentsIsLoading}
          comments={articleComments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
