import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GoodsShareHomeScreen from '../../screens/ModulesScreens/GoodsShareScreens';
import CreateRideScreen from '../../components/ContainersComponent/RideShareContainer/CreateRideContainer';
const Stack = createStackNavigator();

function GoodsShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GoodsShareHome" component={GoodsShareHomeScreen} />
      {/* <Stack.Screen name="CreateGoodsScreen" component={CreateRideScreen} /> */}
    </Stack.Navigator>
  );
}

export default GoodsShareNavigator;
