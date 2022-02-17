import { keyMirror } from '@gilbarbara/helpers';

import { Status } from 'types';

export const ActionTypes = keyMirror({
  LIST_GET_REQUEST: undefined,
  LIST_GET_MORE_REQUEST: undefined,
  LIST_GET_MORE_SUCCESS: undefined,
  LIST_GET_MORE_FAILURE: undefined,
  LIST_GET_SUCCESS: undefined,
  LIST_GET_FAILURE: undefined,
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
