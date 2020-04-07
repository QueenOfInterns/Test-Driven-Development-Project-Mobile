import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenOne} from '../screens/ScreenOne';
import {ScreenTwo} from '../screens/ScreenTwo';
import {ScreenThree} from '../screens/ScreenThree';
import {ScreenFour} from '../screens/ScreenFour';

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
    tabBarOnPress: ({navigation, defaultHandler}) => {
      if (
        navigation.routeName === 'Second' ||
        navigation.routeName === 'Third'
      ) {
        return null;
      }
      defaultHandler();
    },
  },
);

export default TabNavigator;
