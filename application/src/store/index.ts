/* eslint-disable import/prefer-default-export */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import reducers from '../reducers';
import rootSaga from '../sagas';

import { StoreState } from '../types';

import middleware, { sagaMiddleware } from './middleware';

const rootReducer = persistCombineReducers<StoreState>(
  {
    key: 'rrsb',
    stateReconciler: autoMergeLevel2,
    storage: AsyncStorage,
    whitelist: [],
    timeout: 0,
  },
  reducers,
);

const composeEnhancer = compose;

/* istanbul ignore next */
export const configStore = (initialState: any = {}, additionalMiddleware: Middleware[] = []) => {
  const store: Store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...additionalMiddleware, ...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return {
    persistor: persistStore(store),
    store,
  };
};


// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { combineReducers } from 'redux'
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'

// import { api } from '@/Services/api'
// import * as modules from '@/Services/modules'
// import theme from './Theme'

// const reducers = combineReducers({
//   theme,
//   ...Object.values(modules).reduce(
//     (acc, module) => ({
//       ...acc,
//       [module.reducerPath]: module.reducer,
//     }),
//     {},
//   ),
// })

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['theme'],
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware => {
//     const middlewares = getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(api.middleware)

//     if (__DEV__ && !process.env.JEST_WORKER_ID) {
//       const createDebugger = require('redux-flipper').default
//       middlewares.push(createDebugger())
//     }

//     return middlewares
//   },
// })

// const persistor = persistStore(store)

// setupListeners(store.dispatch)

// export { store, persistor }