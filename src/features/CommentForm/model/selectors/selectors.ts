import { StateSchema } from 'app/providers/StoreProvider';

export const selectText = (state: StateSchema) => state.commentForm?.text ?? '';
export const selectError = (state: StateSchema) => state.commentForm?.error;
