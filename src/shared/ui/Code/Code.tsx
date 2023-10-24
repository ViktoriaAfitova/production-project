import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copyIcon.svg';
import style from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(style.code, {}, [className])}>
      <Button
        className={style.copyButton}
        theme={ButtonTheme.Clear}
        onClick={onCopy}
      >
        <CopyIcon className={style.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
