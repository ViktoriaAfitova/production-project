import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
