import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/commentForm';

const initialState: CommentFormSchema = {
  text: '',
};

export const commentFormSlice = createSlice({
  name: 'commentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: commentFormActions } = commentFormSlice;
export const { reducer: commentFormReducer } = commentFormSlice;
