import React from 'react';
import {createAppContainer} from 'react-navigation';
import Screen1 from '../screens/Screen1/Screen1';
import {Screen2} from '../screens/Screen2/Screen2';
import {Screen3} from '../screens/Screen3/Screen3';
import {Screen4} from '../screens/Screen4/Screen4';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import * as data1 from '../../output/output1.json';
import * as data2 from '../../output/output2.json';
import * as data3 from '../../output/output3.json';
import * as data4 from '../../output/output4.json';

function screenPass(screen) {
  var data;
  switch (screen) {
    case 1:
      data = data1;
      break;
    case 2:
      data = data2;
      break;
    case 3:
      data = data3;
      break;
    case 4:
      data = data4;
      break;
    default:
      data = data1;
  }
  return !(data.testResults[0].status === 'failed');
}

const TabNavigator = createBottomTabNavigator(
  {
    First: {
      screen: Screen4,
    },
    Second: {
      screen: Screen2,
    },
    Third: {
      screen: Screen3,
    },
    Fourth: {
      screen: Screen4,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOnPress: ({navigation, defaultHandler}) => {
        if (
          (navigation.state.routeName === 'Second' && !screenPass(1)) ||
          (navigation.state.routeName === 'Third' && !screenPass(2)) ||
          (navigation.state.routeName === 'Fourth' && !screenPass(3))
        ) {
          return null;
        }
        defaultHandler();
      },
    }),
  },
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
