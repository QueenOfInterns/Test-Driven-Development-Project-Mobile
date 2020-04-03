import React from 'react';
import {ScreenOne} from './src/screens/ScreenOne';
import {ScreenTwo} from './src/screens/ScreenTwo';
import {ScreenThree} from './src/screens/ScreenThree';
import {ScreenFour} from './src/screens/ScreenFour';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    First: {
      screen: ScreenOne,
    },
    Second: {
      screen: ScreenTwo,
    },
    Third: {
      screen: ScreenThree,
    },
    Fourth: {
      screen: ScreenFour,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOnPress: ({navigation, defaultHandler}) => {
        if (
          navigation.state.routeName === 'Second' ||
          navigation.state.routeName === 'Third'
        ) {
          return null;
        }
        defaultHandler();
      },
    }),
  },
);

const AppContainer = createAppContainer(TabNavigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
