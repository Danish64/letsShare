//Main Navigation
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigator from './BottomTabNavigator';
import SplashScreen from '../screens/SplashScreen';
import GoodsShareHomeScreen from '../screens/ModulesScreens/GoodsShareScreens';
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="GoodsShareHome" component={GoodsShareHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
