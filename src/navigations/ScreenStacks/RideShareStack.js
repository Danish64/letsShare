import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RideShareHomeScreen from '../../screens/ModulesScreens/RideShareScreens';

const Stack = createStackNavigator();

function RideShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RideShareHome" component={RideShareHomeScreen} />
    </Stack.Navigator>
  );
}

export default RideShareNavigator;
