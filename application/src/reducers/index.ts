import list, { listState } from './list';

export const initialState = {
  list: listState,
};

export default {
  ...list,
};
