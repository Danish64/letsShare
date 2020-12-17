import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SpaceShareHomeScreen from '../../screens/ModulesScreens/SpaceShareScreens/Home';

const Stack = createStackNavigator();

function SpaceShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SpaceShareHome" component={SpaceShareHomeScreen} />
    </Stack.Navigator>
  );
}

export default SpaceShareNavigator;
