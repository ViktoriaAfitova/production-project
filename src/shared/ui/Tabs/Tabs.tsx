import { ReactNode, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onClickTab: (tab: TabItem) => void;
}

export const Tabs = memo(({
  className,
  value,
  tabs,
  onClickTab,
}: TabsProps) => {
  const clickHandle = useCallback((tab: TabItem) => () => {
    onClickTab(tab);
  }, [onClickTab]);

  return (
    <div className={classNames(style.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.DEFAULT : CardTheme.OUTLINED}
          className={style.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
