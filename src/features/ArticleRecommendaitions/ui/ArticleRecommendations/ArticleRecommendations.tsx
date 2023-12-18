import { ArticleList, ArticleView } from 'entities/Article';
import { useArticleRecommendations } from 'features/ArticleRecommendaitions/store/api';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VerticalStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleRecommendationsProps {
  className?: string;
}

export const ArticleRecommendations = memo(({
  className,
}: ArticleRecommendationsProps) => {
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendations(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VerticalStack gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Recommend')}
      />
      <ArticleList
        view={ArticleView.VIEW_SMALL}
        articles={articles}
        target="_blank"
        virtualized={false}
      />
    </VerticalStack>
  );
});
