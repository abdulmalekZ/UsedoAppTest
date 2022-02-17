import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'literals';

import { ListState, List } from 'types';

const item: List = {
  id: 0,
  title: '',
  data: '',
};

export const listState: ListState = {
  list: [],
};

export default {
  list: createReducer<ListState>(
    {
      [ActionTypes.LIST_GET_REQUEST]: (draft, { payload }) => {
        draft.list = draft.list || { ...item };
        draft.list = [];
      },
      [ActionTypes.LIST_GET_SUCCESS]: (draft, { payload }) => {
        draft.list = payload;
      },
      [ActionTypes.LIST_GET_MORE_REQUEST]: (draft, { payload }) => {},
      [ActionTypes.LIST_GET_MORE_SUCCESS]: (draft, { payload }) => {
        draft.list = payload;
      },
    },
    listState,
  ),
};
