import {
  appReducer,
  appReducerNamespace,
} from './app';

export const rootReducer = {
  [appReducerNamespace]: appReducer,
};
