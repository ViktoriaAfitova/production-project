import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(style.articleDetails, {}, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <div className={classNames(style.articleDetails, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
