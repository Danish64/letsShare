import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticationHome from '../../screens/ModulesScreens/AuthenticationScreens';
import RegisterUser from '../../screens/ModulesScreens/AuthenticationScreens/RegisterScreen';

const Stack = createStackNavigator();

function EventNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
      <Stack.Screen name="AuthenticationHome" component={AuthenticationHome} />
    </Stack.Navigator>
  );
}

export default EventNavigator;
