import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodShareHomeScreen from '../../screens/ModulesScreens/FoodShareScreens';

const Stack = createStackNavigator();

function FoodShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FoodShareHome" component={FoodShareHomeScreen} />
    </Stack.Navigator>
  );
}

export default FoodShareNavigator;
