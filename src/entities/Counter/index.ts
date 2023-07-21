import type { CounterSchema } from './model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';

export {
  counterReducer,
  Counter,
  CounterSchema,
};
