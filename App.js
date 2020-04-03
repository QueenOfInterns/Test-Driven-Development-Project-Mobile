import React from 'react';
import { ScreenOne } from './src/screens/ScreenOne';
import { ScreenTwo } from './src/screens/ScreenTwo';
import { ScreenThree } from './src/screens/ScreenThree';
import { ScreenFour } from './src/screens/ScreenFour';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  s1: ScreenOne,
  s2: ScreenTwo,
  s3: ScreenThree,
  s4: ScreenFour
});

const AppContainer = createAppContainer(TabNavigator);

const App: () => React$Node = () => {
  return (
      <AppContainer />
  );
};

export default App;
