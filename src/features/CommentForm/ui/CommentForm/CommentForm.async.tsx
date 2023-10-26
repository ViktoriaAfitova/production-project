import { FC, lazy } from 'react';
import { CommentFormProps } from './CommentForm';

export const CommentFormAsync = lazy<FC<CommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Don't do that!!!!!
  setTimeout(() => resolve(import('./CommentForm')), 1500);
}));
