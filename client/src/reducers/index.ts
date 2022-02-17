import app, { appState } from './app';
import list, { listState } from './list';
import user, { userState } from './user';

export const initialState = {
  app: appState,
  list: listState,
  user: userState,
};

export default {
  ...app,
  ...list,
  ...user,
};
