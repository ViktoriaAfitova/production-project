import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/store/slice';
import { commentFormReducer } from 'features/CommentForm/model/slice/commentFormSlice';
import { ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  commentForm: commentFormReducer,
  articleDetailsComments: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
