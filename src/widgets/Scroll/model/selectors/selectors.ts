import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const selectScroll = (state: StateSchema) => state.scroll.scroll;
export const selectScrollPath = createSelector(
  selectScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
