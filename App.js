import React from 'react';
import {createAppContainer} from 'react-navigation';
import TabNavigator from './src/navigation/MainNavigator';

const AppContainer = createAppContainer(TabNavigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
