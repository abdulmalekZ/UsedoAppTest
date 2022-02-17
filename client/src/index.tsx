import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configStore } from 'store';

import Loader from 'components/Loader';
import ErrorHandler from 'containers/ErrorHandler';
import GlobalStyles from 'containers/GlobalStyles';

import reportWebVitals from './reportWebVitals';
import Root from './Root';
import { register } from './serviceWorkerRegistration';

const { persistor, store } = configStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader block size={100} />} persistor={persistor}>
      <ErrorHandler>
        <HelmetProvider>
          <Root />
        </HelmetProvider>
      </ErrorHandler>
      <GlobalStyles />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

/* istanbul ignore next */
register({
  onUpdate: () => {},
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); // eslint-disable-line no-console
