import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleItem } from 'entities/Article/ui/ArticleItem/ArticleItem';
import style from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
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
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  const renderArticles = (article: Article) => (
    <ArticleItem
      key={article.id}
      article={article}
      view={view}
      className={style.card}
    />
  );

  return (
    <div className={classNames(style.articleList, {}, [className, style[view]])}>
      {articles.length > 0
        ? articles.map(renderArticles)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
