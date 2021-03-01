import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticationHome from '../../screens/ModulesScreens/AuthenticationScreens';
import RegisterUser from '../../screens/ModulesScreens/AuthenticationScreens/RegisterScreen';
import PasswordScreen from '../../screens/ModulesScreens/AuthenticationScreens/PasswordScreen';

const Stack = createStackNavigator();

function EventNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthenticationHome" component={AuthenticationHome} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
    </Stack.Navigator>
  );
}

export default EventNavigator;
