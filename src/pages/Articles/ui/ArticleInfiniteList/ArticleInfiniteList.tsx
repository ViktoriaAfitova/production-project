import { ArticleList } from 'entities/Article';
import { selectError, selectIsLoading, selectView } from 'pages/Articles/model/slectors/selectors';
import { selectArticles } from 'pages/Articles/model/slice/articlesSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({
  className,
}: ArticleInfiniteListProps) => {
  const { t } = useTranslation('article');
  const articles = useSelector(selectArticles.selectAll);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const view = useSelector(selectView);

  if (error) {
    return <Text text={t('Error loading articles')} />;
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      articles={articles}
      view={view}
    />
  );
});
