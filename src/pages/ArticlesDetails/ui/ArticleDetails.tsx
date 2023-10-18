import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.articleDetails, {}, [className])}>
      {t('Article Details')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
