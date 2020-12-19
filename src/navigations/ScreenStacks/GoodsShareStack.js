import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoodsShareHomeScreen from '../../screens/ModulesScreens/GoodsShareScreens';
import CreateGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/CreateGoodsScreen';
import AddGoodsScreen from '../../screens/ModulesScreens/GoodsShareScreens/CreateGoodsScreen/AddGoodsScreen';
const Stack = createStackNavigator();

function GoodsShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GoodsShareHome" component={GoodsShareHomeScreen} />
      <Stack.Screen name="CreateGoodsScreen" component={CreateGoodsScreen} />
      <Stack.Screen name="AddGoodsScreen" component={AddGoodsScreen} />
    
    </Stack.Navigator>
  );
}

export default GoodsShareNavigator;
