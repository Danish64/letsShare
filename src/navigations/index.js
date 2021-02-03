//Main Navigation
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigator from './BottomTabNavigator';
import SplashScreen from '../screens/SplashScreen';
import AuthenticationStack from './ScreenStacks/AuthenticationStack';
import AddRideScreen from '../screens/ModulesScreens/RideShareScreens/CreateRideScreen/AddRideScreen';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="Authentication" component={AddRideScreen} /> */}

        {/* <Stack.Screen name="Authentication" component={AuthenticationStack} /> */}
        <Stack.Screen name="Home" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
