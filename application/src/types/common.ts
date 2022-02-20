import React from 'react';

export interface ActionCreator<P extends any[] = any[], A = any> {
  (...args: P): StoreAction<A>;
}

export interface ActionsMapReducer<State> {
  [type: string]: (draft: State, action: StoreAction) => any;
}

export type GenericFunction<T = any> = (...args: any[]) => T;

export type PlainObject<T = any> = Record<string, T>;

export interface StoreAction<T = any> {
  error?: boolean;
  meta?: PlainObject;
  payload?: T;
  type: string;
}

export interface List {
  id: number;
  title: string;
  data: string;
}