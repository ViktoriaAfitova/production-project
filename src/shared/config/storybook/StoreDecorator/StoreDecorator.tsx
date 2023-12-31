import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice';
import { commentFormReducer } from 'features/CommentForm/model/slice/commentFormSlice';
import { profileReducer } from 'features/ProfileEditCard/store';
import { articleDetailsPageReducer } from 'pages/ArticlesDetails/model/slice';
import { ReducerList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  commentForm: commentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
