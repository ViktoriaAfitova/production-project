import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import style from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.articleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text
          title={block.title}
          className={style.title}
        />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          text={paragraph}
          className={style.paragraph}
        />
      ))}
    </div>
  );
});
