import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import P1 from '../sreens/P1/index';
import P2 from '../sreens/P2/index';
import P3 from '../sreens/P3/index';
import P4 from '../sreens/P4';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'P1'} component={P1} />
        <Stack.Screen name={'P2'} component={P2} />
        <Stack.Screen name={'P3'} component={P3} />
        <Stack.Screen name={'P4'} component={P4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
