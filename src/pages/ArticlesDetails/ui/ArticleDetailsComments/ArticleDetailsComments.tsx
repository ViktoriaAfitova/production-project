import { CommentList } from 'entities/Comment';
import { CommentForm } from 'features/CommentForm';
import { selectArticleCommentsIsLoading } from 'pages/ArticlesDetails/model/selectors/selectors';
import { articleComment } from 'pages/ArticlesDetails/model/services/ArticleComment/articleComment';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticlesDetails/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { selectArticleComments } from 'pages/ArticlesDetails/model/slice/articleDetailsCommentSlice';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { VerticalStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = ({
  className,
  id,
}: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const articleComments = useSelector(selectArticleComments.selectAll);
  const articleCommentsIsLoading = useSelector(selectArticleCommentsIsLoading);

  // useInitialEffect from hooks
  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  const onSendText = useCallback((text: string) => {
    dispatch(articleComment(text));
  }, [dispatch]);

  return (
    <VerticalStack gap="16" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Comments')}
      />
      <CommentForm onSendText={onSendText} />
      <CommentList
        isLoading={articleCommentsIsLoading}
        comments={articleComments}
      />
    </VerticalStack>
  );
};
