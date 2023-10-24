import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import style from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.articleImageBlockComponent, {}, [className])}>
      <img
        className={style.image}
        src={block.src}
        alt={block.title}
      />
      {block.title && (
        <Text
          text={block.title}
          align={TextAlign.CENTER}
        />
      )}
    </div>
  );
});
