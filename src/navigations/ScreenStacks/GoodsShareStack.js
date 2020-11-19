import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoodsShareHomeScreen from '../../screens/ModulesScreens/GoodsShareScreens';

const Stack = createStackNavigator();

function GoodsShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GoodsShareHome" component={GoodsShareHomeScreen} />
    </Stack.Navigator>
  );
}

export default GoodsShareNavigator;
