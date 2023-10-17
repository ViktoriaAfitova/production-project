import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfile = (state: StateSchema) => state.profile?.data;

export const selectLoading = (state: StateSchema) => state.profile?.isLoading;

export const selectError = (state: StateSchema) => state.profile?.error;

export const selectReadonly = (state: StateSchema) => state.profile?.readonly;

export const selectForm = (state: StateSchema) => state.profile?.form;

export const selectValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
