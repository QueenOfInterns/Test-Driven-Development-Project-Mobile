import React from 'react';
import {ScreenOne} from './src/screens/ScreenOne';
import {ScreenTwo} from './src/screens/ScreenTwo';
import {ScreenThree} from './src/screens/ScreenThree';
import {ScreenFour} from './src/screens/ScreenFour';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import * as data1 from './output/output1.json';
import * as data2 from './output/output2.json';
import * as data3 from './output/output3.json';
import * as data4 from './output/output4.json';

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

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
