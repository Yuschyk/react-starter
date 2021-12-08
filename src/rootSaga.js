import { all } from 'redux-saga/effects';

import { watchApp } from './app/saga';


export function* rootSaga() {
  yield all([
    watchApp(),
  ]);
}

