import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RideShareHomeScreen from '../../screens/ModulesScreens/RideShareScreens';
import CreateRideScreen from '../../components/ContainersComponent/RideShareContainer/CreateRideContainer';

const Stack = createStackNavigator();

function RideShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RideShareHome" component={RideShareHomeScreen} />
      <Stack.Screen name="CreateRideScreen" component={CreateRideScreen} />
    </Stack.Navigator>
  );
}

export default RideShareNavigator;
