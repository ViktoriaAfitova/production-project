import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import style from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.comments, {}, [className])}>
      {comments?.length ? comments?.map((comment) => (
        <CommentCard
          isLoading={isLoading}
          className={style.comment}
          comment={comment}
        />
      ))
        : <Text text={t('Comment is absent')} />}
    </div>
  );
});
