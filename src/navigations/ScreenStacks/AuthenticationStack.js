import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/ModulesScreens/AuthenticationScreens';
import RegisterUserScreen from '../../screens/ModulesScreens/AuthenticationScreens/RegisterScreen';
import PasswordScreen from '../../screens/ModulesScreens/AuthenticationScreens/PasswordScreen';

const Stack = createStackNavigator();

function AuthenticationNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        initialParams={{email: ''}}
      />
      <Stack.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
    </Stack.Navigator>
  );
}

export default AuthenticationNavigator;
