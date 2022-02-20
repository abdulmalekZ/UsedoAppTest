/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator from './src/navigation/Application';
import { configStore } from './src/store';

const { store } = configStore();


const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};

export default App;
