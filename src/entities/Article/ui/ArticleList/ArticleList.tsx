import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleItem } from 'entities/Article/ui/ArticleItem/ArticleItem';
import { Text, TextSize } from 'shared/ui/Text/Text';
import style from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.VIEW_SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleItemSkeleton className={style.card} key={index} view={view} />
  ));

export const ArticleList = memo(({
  className,
  articles,
  view = ArticleView.VIEW_SMALL,
  isLoading,
  target,
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  const renderArticles = (article: Article) => (
    <ArticleItem
      key={article.id}
      article={article}
      view={view}
      className={style.card}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(style.articleList, {}, [className, style[view]])}>
        <Text size={TextSize.L} title={t('Nothing not found')} />
      </div>
    );
  }

  return (
    <div className={classNames(style.articleList, {}, [className, style[view]])}>
      {articles.length > 0
        ? articles.map(renderArticles)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
