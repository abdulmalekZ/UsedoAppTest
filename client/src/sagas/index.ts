import { all, fork } from 'redux-saga/effects';

import list from './list';
import user from './user';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(list), fork(user)]);
}
