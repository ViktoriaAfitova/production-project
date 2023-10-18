import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import style from './Articles.module.scss';

interface ArticlesProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.articles, {}, [className])}>
      {t('Articles')}
    </div>
  );
};

export default memo(ArticlesPage);
