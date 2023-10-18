import { StateSchema } from 'app/providers/StoreProvider';

export const selectMounted = (state: StateSchema) => state.user._mounted;
