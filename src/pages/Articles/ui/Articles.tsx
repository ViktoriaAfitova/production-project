import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import style from './Articles.module.scss';
import { articlesReducer } from '../model/slice/articlesSlice';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticles } from '../model/services/initArticles/initArticles';
import { ArticlesFilter } from '../components/filter/ui/ArticlesFilter';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesProps {
  className?: string;
}

const reducers: ReducerList = {
  articles: articlesReducer,
};

const ArticlesPage = ({ className }: ArticlesProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  let [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  // useInitialEffect
  useEffect(() => {
    dispatch(initArticles(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(style.articles, {}, [className])}
      >
        <ArticlesFilter />
        <ArticleInfiniteList className={style.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
