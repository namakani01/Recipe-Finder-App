import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
};

export default App;
