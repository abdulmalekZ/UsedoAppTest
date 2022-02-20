import { all, fork } from 'redux-saga/effects';

import list from './list';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(list)]);
}
