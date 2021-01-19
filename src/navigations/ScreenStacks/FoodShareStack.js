import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodShareHomeScreen from '../../screens/ModulesScreens/FoodShareScreens';
import CreateFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen';
import AddFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/AddFoodScreen';

const Stack = createStackNavigator();

function FoodShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FoodShareHome" component={FoodShareHomeScreen} />
      <Stack.Screen name="CreateFoodScreen" component={CreateFoodScreen} />
      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} />
    </Stack.Navigator>
  );
}

export default FoodShareNavigator;
