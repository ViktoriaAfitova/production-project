import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect, memo, useCallback } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  selectArticleDetails,
  selectArticleDetailsError,
  selectArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/selectors';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eyeIcon.svg';
import CalendarIcon from 'shared/assets/icons/calendarIcon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import style from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const article = useSelector(selectArticleDetails);
  const isLoading = useSelector(selectArticleDetailsIsLoading);
  // const isLoading = true;
  const error = useSelector(selectArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={style.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={style.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={style.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    // if (__PROJECT__ !== 'storybook') {
    dispatch(fetchArticleById(id));
    // }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={style.avatar} width={200} height={200} border="50%" />
        <Skeleton className={style.title} width={300} height={32} />
        <Skeleton className={style.skeleton} width={600} height={24} />
        <Skeleton className={style.skeleton} width="100%" height={200} />
        <Skeleton className={style.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Something went wrong')}
      />
    );
  } else {
    content = (
      <>
        <div className={style.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            className={style.avatar}
          />
        </div>
        <Text
          className={style.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={style.articleInfo}>
          <Icon className={style.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={style.articleInfo}>
          <Icon className={style.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(style.articleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
