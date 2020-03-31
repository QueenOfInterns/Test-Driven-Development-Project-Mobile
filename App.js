import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/MainNavigator';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default App;
