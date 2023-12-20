import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/sortOrder';
import style from './SortArticle.module.scss';

export interface SortArticleProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const SortArticle = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: SortArticleProps) => {
  const { t } = useTranslation('article');

  const sortOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const filterOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED_AT,
      content: t('by creation date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('by title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('by number of views'),
    },
  ], [t]);

  return (
    <div className={classNames(style.articleSort, {}, [className])}>
      <Select
        options={filterOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
        className={style.order}
      />
      <Select
        options={sortOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
        className={style.order}
      />
    </div>
  );
};
