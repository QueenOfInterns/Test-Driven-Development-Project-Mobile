import React from 'react';
import {ScreenOne} from '../screens/ScreenOne';
import {ScreenTwo} from '../screens/ScreenTwo';
import {ScreenThree} from '../screens/ScreenThree';
import {ScreenFour} from '../screens/ScreenFour';
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

export default AppContainer