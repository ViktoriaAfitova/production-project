import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import style from './CommentForm.module.scss';
import { selectError, selectText } from '../../model/selectors/selectors';
import { commentFormActions, commentFormReducer } from '../../model/slice/commentFormSlice';

export interface CommentFormProps {
  className?: string;
  onSendText: (text: string) => void;
}

const reducers: ReducerList = {
  commentForm: commentFormReducer,
};

const CommentForm = memo(({ className, onSendText }: CommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(selectText);
  const error = useSelector(selectError);
  const dispatch = useAppDispatch();

  const onChangeText = useCallback((value: string) => {
    dispatch(commentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendText(text || '');
    onChangeText('');
  }, [onChangeText, onSendText, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(style.commentForm, {}, [className])}>
        <Input
          className={style.input}
          placeholder={t('Enter comment text')}
          value={text}
          onChange={onChangeText}
        />
        <Button
          theme={ButtonTheme.Outline}
          onClick={onSendHandler}
        >
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default CommentForm;
