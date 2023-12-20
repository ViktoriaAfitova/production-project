import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import {
  ArticleSortField,
  ArticleType,
  ArticleView,
  ArticleViewSwitcher,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  selectOrder, selectSearch, selectSort, selectType, selectView,
} from 'pages/Articles/model/slectors/selectors';
import { articlesActions } from 'pages/Articles/model/slice/articlesSlice';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortArticle } from 'features/SortArticle';
import { SortOrder } from 'shared/types/sortOrder';
import { fetchArticles } from 'pages/Articles/model/services/fetchArticles/fetchArticles';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import style from './ArticlesFilter.module.scss';

export interface ArticlesFilterProps {
  className?: string;
}

export const ArticlesFilter = ({ className }: ArticlesFilterProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(selectView);
  const sort = useSelector(selectSort);
  const order = useSelector(selectOrder);
  const search = useSelector(selectSearch);
  const type = useSelector(selectType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesActions.setOrder(newOrder));
    dispatch(articlesActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesActions.setSort(newSort));
    dispatch(articlesActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesActions.setSearch(search));
    dispatch(articlesActions.setPage(1));
    debounceFetchData();
  }, [dispatch, debounceFetchData]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesActions.setType(value));
    dispatch(articlesActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(style.articles, {}, [className])}>
      <div className={style.container}>
        <SortArticle
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSwitcher
          view={view}
          onClickView={onChangeView}
        />
      </div>
      <Card className={style.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Search')}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={style.tabs}
      />
    </div>
  );
};
