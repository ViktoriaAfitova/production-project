import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { VerticalStack } from 'shared/ui/Stack';
import style from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <VerticalStack gap="8" max className={classNames(style.comment, {}, [className, style.loading])}>
        <div className={style.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={style.username} />
        </div>
        <Skeleton width="100%" height={50} className={style.text} />
      </VerticalStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VerticalStack max gap="8" className={classNames(style.comment, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={style.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={style.username} title={comment.user.username} />
      </AppLink>
      <Text className={style.text} text={comment.text} />
    </VerticalStack>
  );
});
