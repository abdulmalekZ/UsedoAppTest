import { request } from '@gilbarbara/helpers';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from '../literals';

import { StoreAction } from '../types';

/**
 * Get List
 *
 * @param {Object} action
 *
 */
export function* getList({ payload }: StoreAction) {
  try {
    let items;
    ({ items = [] } = yield call(request, `http://localhost:3003/getList`));

    yield put({
      type: ActionTypes.LIST_GET_SUCCESS,
      payload: items,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ActionTypes.LIST_GET_FAILURE,
      payload: err,
    });
  }
}

export function* getListMore({ payload }: StoreAction) {
  const { prevData } = payload;
  try {
    let items;
    ({ items = [] } = yield call(request, `http://localhost:3003/getList`));

    yield put({
      type: ActionTypes.LIST_GET_MORE_SUCCESS,
      payload: [...prevData, ...items],
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ActionTypes.LIST_GET_MORE_FAILURE,
      payload: err,
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.LIST_GET_REQUEST, getList)]);
  yield all([takeLatest(ActionTypes.LIST_GET_MORE_REQUEST, getListMore)]);
}
