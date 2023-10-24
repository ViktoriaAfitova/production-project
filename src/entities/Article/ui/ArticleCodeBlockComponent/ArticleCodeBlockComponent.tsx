import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import style from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(style.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
