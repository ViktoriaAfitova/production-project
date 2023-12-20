import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import { ArticleView } from '../../model/constants/constants';
import style from './ArticleItem.module.scss';

interface ArticleItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleItemSkeleton = memo(({
  className,
  view,
}: ArticleItemSkeletonProps) => {
  if (view === ArticleView.VIEW_BIG) {
    return (
      <div className={classNames(style.articleItem, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={style.username} />
            <Skeleton width={150} height={16} className={style.date} />
          </div>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton width={150} height={16} className={style.username} />
          <Skeleton width={150} height={16} className={style.date} />
          <div className={style.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(style.articleItem, {}, [className, style[view]])}>
      <Card
        className={style.card}
      >
        <div className={style.imageWrapper}>
          <Skeleton
            width={200}
            height={200}
            className={style.image}
          />
        </div>
        <div className={style.infoWrapper}>
          <Skeleton width={130} height={16} className={style.types} />
        </div>
        <Skeleton width={150} height={16} className={style.title} />
      </Card>
    </div>
  );
});
