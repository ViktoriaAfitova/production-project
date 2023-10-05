import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfile = (state: StateSchema) => state.profile?.data;

export const selectLoading = (state: StateSchema) => state.profile?.isLoading;

export const selectError = (state: StateSchema) => state.profile?.error;