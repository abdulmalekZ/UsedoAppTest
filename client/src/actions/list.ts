/* eslint-disable import/prefer-default-export */
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createAction } from 'modules/helpers';

import { ActionTypes } from 'literals';
import { List } from 'types/common';

export const getList = createAction(ActionTypes.LIST_GET_REQUEST, () => ({}));

export const getMore = createAction(ActionTypes.LIST_GET_MORE_REQUEST, (prevData: List[]) => ({prevData}));
