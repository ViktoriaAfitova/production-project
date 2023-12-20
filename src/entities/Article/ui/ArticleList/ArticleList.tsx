import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleItem } from 'entities/Article/ui/ArticleItem/ArticleItem';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleView } from '../../model/constants/constants';
import style from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.VIEW_SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleItemSkeleton className={style.card} key={index} view={view} />
  ));

export const ArticleList = memo(({
  className,
  articles,
  view = ArticleView.VIEW_SMALL,
  isLoading,
  target,
  virtualized = true,
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  const isBig = view === ArticleView.VIEW_BIG;
  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({
    index,
    isScrolling,
    key,
    style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleItem
          article={articles[i]}
          view={view}
          // className={style.card}
          target={target}
          key={`str${i}`}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        // className={style.row}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(style.articleList, {}, [className, style[view]])}>
        <Text size={TextSize.L} title={t('Nothing not found')} />
      </div>
    );
  }

  return (
    // @ts-ignore
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
        // @ts-ignore
          ref={registerChild}
          className={classNames(style.articleList, {}, [className, style[view]])}
        >
          {virtualized
            ? (
              // @ts-ignore
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRenderer}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            )
            : (
              articles.map((article) => (
                <ArticleItem
                  article={article}
                  view={view}
                  target={target}
                  key={article.id}
                  className={style.card}
                />
              ))
            )}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
