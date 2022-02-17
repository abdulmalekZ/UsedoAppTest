import React from 'react';

export interface ActionCreator<P extends any[] = any[], A = any> {
  (...args: P): StoreAction<A>;
}

export interface ActionsMapReducer<State> {
  [type: string]: (draft: State, action: StoreAction) => any;
}

export interface AsyncFlow {
  message: string;
  status: Status;
}

export type GenericFunction<T = any> = (...args: any[]) => T;

export type PlainObject<T = any> = Record<string, T>;

export interface RouteProps {
  component: React.ComponentType<any>;
  exact?: boolean;
  isAuthenticated: boolean;
  path: string;
  to?: string;
}

export interface Status {
  ERROR: 'error';
  IDLE: 'idle';
  READY: 'ready';
  RUNNING: 'running';
  SUCCESS: 'success';
}

export interface StoreAction<T = any> {
  error?: boolean;
  meta?: PlainObject;
  payload?: T;
  type: string;
}

export interface List {
  id: number
  title: string
  data: string
}


export type Transitions = 'fade' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp';
