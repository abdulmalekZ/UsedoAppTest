import { REHYDRATE } from 'redux-persist';

import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'literals';

import { AppState } from 'types';

export const appState: AppState = {
  alerts: [],
};

export default {
  app: createReducer<AppState>(
    {
      [REHYDRATE]: draft => {
        draft.alerts = [];
      }
    },
    appState,
  ),
};
