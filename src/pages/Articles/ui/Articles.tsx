import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import style from './Articles.module.scss';
import { articlesActions, articlesReducer, selectArticles } from '../model/slice/articlesSlice';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { selectError, selectIsLoading, selectView } from '../model/slectors/selectors';

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

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesActions.setView(view));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(articlesActions.initialState());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(style.articles, {}, [className])}>
        <ArticleViewSwitcher view={view} onClickView={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
