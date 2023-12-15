import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VerticalStack } from 'shared/ui/Stack';
import { ArticleRecommendations } from 'features/ArticleRecommendaitions';
import style from './ArticleDetails.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

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
        <VerticalStack max gap="16">
          <ArticleDetailsHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendations />
          <ArticleDetailsComments id={id} />
        </VerticalStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
