import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RideShareHomeScreen from '../../screens/ModulesScreens/RideShareScreens';
import CreateRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen';
import AddRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/AddRideScreen';
import CityToCityRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/CityToCityRideScreen';
import NearByRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/NearByRideScreen';
import NearByRideFareDetailScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/NearByRideFareDetailScreen';
import NearByRideFareDetailContinueScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/NearByRideFareDetailContinueScreen';

import TourRideScreen from '../../screens/ModulesScreens/RideShareScreens/CreateRideScreen/TourRideScreen';
import RecentlySharedRideScreen from '../../screens/ModulesScreens/RideShareScreens/RecentlySharedRideScreen';
import AvailNearbyRideScreen from '../../screens/ModulesScreens/RideShareScreens/AvailNearbyRideScreen';
import AvailCityToCityRideScreen from '../../screens/ModulesScreens/RideShareScreens/AvailCityToCityRideScreen';
import AvailTourRideScreen from '../../screens/ModulesScreens/RideShareScreens/AvailTourRideScreen';
import LoadingIndicator from '../../components/GeneralComponents/LoadingIndicator';
import SharedRidesScreen from '../../screens/ModulesScreens/RideShareScreens/SharedRidesScreen';
import SharedRideDetail from '../../screens/ModulesScreens/RideShareScreens/SharedRideDetail';
import BookingRequestsScreen from '../../screens/ModulesScreens/RideShareScreens/BookingRequestsScreen';
import AvailRideDetail from '../../screens/ModulesScreens/RideShareScreens/AvailRideDetail';
import BookRideScreen from '../../screens/ModulesScreens/RideShareScreens/BookRideScreen';
import AvailedRidesScreen from '../../screens/ModulesScreens/RideShareScreens/AvailedRidesScreen';

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
      <Stack.Screen
        name="CityToCityRideScreen"
        component={CityToCityRideScreen}
      />
      <Stack.Screen name="NearbyRideScreen" component={NearByRideScreen} />
      <Stack.Screen
        name="NearbyRideFareDetailScreen"
        component={NearByRideFareDetailScreen}
      />
      <Stack.Screen
        name="NearbyRideFareContinueScreen"
        component={NearByRideFareDetailContinueScreen}
      />

      <Stack.Screen name="TourRideScreen" component={TourRideScreen} />
      <Stack.Screen
        name="RecentlySharedRideScreen"
        component={RecentlySharedRideScreen}
      />
      <Stack.Screen name="AvailedRidesScreen" component={AvailedRidesScreen} />
      <Stack.Screen
        name="AvailNearbyRideScreen"
        component={AvailNearbyRideScreen}
      />
      <Stack.Screen
        name="AvailCityToCityRideScreen"
        component={AvailCityToCityRideScreen}
      />
      <Stack.Screen
        name="AvailTourRideScreen"
        component={AvailTourRideScreen}
      />
      <Stack.Screen name="LoadingScreen" component={LoadingIndicator} />
      <Stack.Screen name="SharedRidesScreen" component={SharedRidesScreen} />
      <Stack.Screen name="SharedRideDetail" component={SharedRideDetail} />
      <Stack.Screen
        name="BookingRequestsScreen"
        component={BookingRequestsScreen}
      />
      <Stack.Screen name="AvailRideDetail" component={AvailRideDetail} />
      <Stack.Screen name="BookRideScreen" component={BookRideScreen} />
    </Stack.Navigator>
  );
}

export default RideShareNavigator;
