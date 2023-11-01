import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eyeIcon.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import style from './ArticleItem.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleItem = memo(({
  className,
  article,
  view,
}: ArticleItemProps) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articleDetails + article.id);
  }, [article.id, navigate]);

  const types = (
    <Text
      text={article.type.join(', ')}
      className={style.types}
    />
  );

  const views = (
    <>
      <Text
        text={String(article.views)}
        className={style.views}
      />
      <Icon Svg={EyeIcon} />

    </>
  );

  if (view === ArticleView.VIEW_BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div className={classNames(style.articleItem, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.header}>
            <Avatar size={30} src={article.userId.avatar} />
            <Text text={article.userId.username} className={style.username} />
            <Text text={article.createdAt} className={style.date} />
          </div>
          <Text text={article.title} className={style.title} />
          {types}
          <img
            src={article.img}
            className={style.image}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={style.textBlock}
            />
          )}
          <div className={style.footer}>
            <Button
              onClick={onOpenArticle}
              theme={ButtonTheme.Outline}
            >
              {t('Read more...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(style.articleItem, {}, [className, style[view]])}>
      <Card
        onClick={onOpenArticle}
        className={style.card}
      >
        <div className={style.imageWrapper}>
          <img
            src={article.img}
            className={style.image}
            alt={article.title}
          />
          <Text text={article.createdAt} className={style.date} />
        </div>
        <div className={style.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={style.title} />
      </Card>
    </div>
  );
});