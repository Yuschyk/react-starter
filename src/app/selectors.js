import { appReducerNamespace } from './consts';
import { initialState } from './store';


const getAppData = (state) => (
  state[appReducerNamespace] || initialState
);

export const appSelectors = {
  getAppData,
};
