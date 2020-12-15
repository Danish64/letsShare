import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UtilitiesShareHome from '../../screens/ModulesScreens/UtilitiesScreen';
import GoodsShareStack from './GoodsShareStack';
import FoodShareStack from './FoodShareStack';

const Stack = createStackNavigator();

function UtilitiesShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UtilitiesShareHome" component={UtilitiesShareHome} />      
      <Stack.Screen name="GoodsShareStack" component={GoodsShareStack} />
      <Stack.Screen name="FoodShareStack" component={FoodShareStack} />
    </Stack.Navigator>
  );
}

export default UtilitiesShareNavigator;
