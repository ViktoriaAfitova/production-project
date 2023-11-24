import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { api } from 'shared/api/api';
import { scrollReducer } from 'widgets/Scroll';
import { StateSchema, ThunkExtraArguments } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scroll: scrollReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArguments = {
    api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore> ['dispatch'];
