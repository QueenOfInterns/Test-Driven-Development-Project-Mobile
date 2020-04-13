/* eslint-disable no-shadow */
import React from 'react';
import AppContainer from './src/navigation/MainNavigator';
import {Provider} from 'react-redux';
import appStore from './src/state/reducers/index';

const App: () => React$Node = () => {
  return (
    <Provider store={appStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
