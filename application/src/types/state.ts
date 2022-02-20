import { Dispatch } from 'redux';
import { ValueOf } from 'type-fest';

import { List, Status } from './common';


export interface AppState {
  alerts: [];
}

export interface ListState {
  list: List[];
}

export interface UserState {
  isAuthenticated: boolean;
  status: ValueOf<Status>;
}

export interface StoreState {
  list: ListState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
