import React from 'react';
import {Provider} from 'react-redux';
import appStore from './src/state/reducers/index';
import {createAppContainer} from 'react-navigation';
import TabNavigator from './src/navigation/MainNavigator';

const AppContainer = createAppContainer(TabNavigator);

const App: () => React$Node = () => {
  return (
    <Provider store={appStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
