import { takeEvery } from 'redux-saga/effects';

import { appActions } from './store';


export function* watchApp() {
  yield takeEvery(appActions.init.type, handleInitApp);
}

export function* handleInitApp() {
  try {
  } catch (e) {
  }
}
