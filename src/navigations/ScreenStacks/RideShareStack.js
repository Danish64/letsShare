import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RideShareHomeScreen from '../../screens/ModulesScreens/RideShareScreens';
import CreateRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen';
import AddRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/AddRideScreen';
import CityToCityRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/CityToCityRideScreen';
import NearByRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/NearByRideScreen';
import TourRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/TourRideScreen';
import RecentlySharedRideScreen from '../../screens/ModulesScreens/RideShareScreens/RecentlySharedRideScreen';
import LoadingIndicator from '../../components/GeneralComponents/LoadingIndicator';

const Stack = createStackNavigator();

function RideShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RideShareHome" component={RideShareHomeScreen} />
      <Stack.Screen name="CreateRideScreen" component={CreateRideScreen} />
      <Stack.Screen name="AddRideScreen" component={AddRideScreen} />
      <Stack.Screen name="CityToCityRideScreen" component={CityToCityRideScreen} />
      <Stack.Screen name="NearbyRideScreen" component={NearByRideScreen} />
      <Stack.Screen name="TourRideScreen" component={TourRideScreen} />
      <Stack.Screen name="RecentlySharedRideScreen" component={RecentlySharedRideScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingIndicator} />
    </Stack.Navigator>
  );
}

export default RideShareNavigator;
