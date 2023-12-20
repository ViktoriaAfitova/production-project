import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import horizontalLinesIcon from 'shared/assets/icons/horizontalLinesIcon.svg';
import tileIcon from 'shared/assets/icons/tileIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/constants/constants';
import style from './ArticleViewSwitcher.module.scss';

export interface ArticleViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onClickView?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.VIEW_SMALL,
    icon: tileIcon,
  },
  {
    view: ArticleView.VIEW_BIG,
    icon: horizontalLinesIcon,
  },
];

export const ArticleViewSwitcher = memo(({ className, view, onClickView }: ArticleViewSwitcherProps) => {
  const { t } = useTranslation('article');

  const onClick = (currentView: ArticleView) => () => {
    onClickView?.(currentView);
  };

  return (
    <div className={classNames(style.articleView, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.Clear}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [style.selected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
});
