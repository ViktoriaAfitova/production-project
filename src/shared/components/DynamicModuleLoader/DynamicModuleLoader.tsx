import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      // add new reducer
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `init ${name} Reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `destroy ${name} Reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};
