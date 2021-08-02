import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import P1 from '../sreens/P1/index';
import P3 from '../sreens/P3/index';
import P4 from '../sreens/P4';
import P5 from '../sreens/popup';
import P6 from '../sreens/P6/index';
import Alert from '../sreens/AlertScreen/Alert';
import AuthFlow from '../singUp/AuthFlow';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'P1'} component={P1} />
        <Stack.Screen name={'P3'} component={P3} />
        <Stack.Screen name={'P4'} component={P4} />
        <Stack.Screen name={'P5'} component={P5} />
        <Stack.Screen name={'P6'} component={P6} />
        <Stack.Screen name={'Alert'} component={Alert} />
        <Stack.Screen name={'AuthFlow'} component={AuthFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
