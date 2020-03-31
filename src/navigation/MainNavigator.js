import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ScreenOne } from '../screens/ScreenOne';
import { ScreenTwo } from '../screens/ScreenTwo';
import { ScreenThree } from '../screens/ScreenThree';
import { ScreenFour } from '../screens/ScreenFour';

const Tab = createBottomTabNavigator();

function MainNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="one" component={ScreenOne} />
      <Tab.Screen name="two" component={ScreenTwo} />
      <Tab.Screen name="three" component={ScreenThree} />
      <Tab.Screen name="four" component={ScreenFour} />
    </Tab.Navigator>
  );
}

export default MainNav;
