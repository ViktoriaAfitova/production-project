import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';
import style from './Articles.module.scss';
import { articlesReducer, selectArticles } from '../model/slice/articlesSlice';
import {
  selectError, selectIsLoading, selectView,
} from '../model/slectors/selectors';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticles } from '../model/services/initArticles/initArticles';
import { ArticlesFilter } from '../components/filter/ui/ArticlesFilter';

interface ArticlesProps {
  className?: string;
}

const reducers: ReducerList = {
  articles: articlesReducer,
};

const ArticlesPage = ({ className }: ArticlesProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(selectArticles.selectAll);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const view = useSelector(selectView);
  let [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticles(searchParams));
  }, [dispatch, searchParams]);

  if (error) {
    return <Text text={t('Something went wrong')} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(style.articles, {}, [className])}
      >
        <ArticlesFilter />
        <ArticleList
          className={style.list}
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
