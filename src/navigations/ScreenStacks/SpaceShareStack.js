import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SpaceShareHomeScreen from '../../screens/ModulesScreens/SpaceShareScreens/Home';
import AvailSpaceDetailScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailSpaceDetailScreen';
import AvailedSpacesScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailedSpacesScreen';
import AvailResidenceSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailResidenceSpaceScreen';
import AvailWorkingSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailWorkingSpaceScreen';
import AvailEventSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailEventSpaceScreen';
import AvailParkingSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailParkingSpaceScreen';
import AvailStorageSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailStorageSpaceScreen';
import CreateSpaceShareScreen from '../../screens/ModulesScreens/SpaceShareScreens/CreateSpaceShare';
import SharedSpacesScreen from '../../screens/ModulesScreens/SpaceShareScreens/SharedSpacesScreen';
import AddSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AddSpaceScreen';
import ShareLivingSpaceFormScreen from '../../screens/ModulesScreens/SpaceShareScreens/ShareLivingSpaceFormScreen';
import ShareWorkingSpaceFormScreen from '../../screens/ModulesScreens/SpaceShareScreens/ShareWorkingSpaceFormScreen';
import ShareEventSpaceFormScreen from '../../screens/ModulesScreens/SpaceShareScreens/ShareEventSpaceFormScreen';
import ShareParkingSpaceFormScreen from '../../screens/ModulesScreens/SpaceShareScreens/ShareParkingSpaceFormScreen';
import ShareStorageSpaceFormScreen from '../../screens/ModulesScreens/SpaceShareScreens/ShareStorageSpaceFormScreen';
import SpaceBookingRequestsScreen from '../../screens/ModulesScreens/SpaceShareScreens/SpaceBookingRequests';
import BookSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/BookSpaceScreen';

const Stack = createStackNavigator();

function SpaceShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SpaceShareHome" component={SpaceShareHomeScreen} />
      <Stack.Screen
        name="CreateSpaceShare"
        component={CreateSpaceShareScreen}
      />
      <Stack.Screen
        name="AvailSpaceDetail"
        component={AvailSpaceDetailScreen}
      />
      <Stack.Screen name="AvailedSpaces" component={AvailedSpacesScreen} />
      <Stack.Screen
        name="AvailResidenceSpace"
        component={AvailResidenceSpaceScreen}
      />
      <Stack.Screen
        name="AvailWorkingSpace"
        component={AvailWorkingSpaceScreen}
      />
      <Stack.Screen name="AvailEventSpace" component={AvailEventSpaceScreen} />
      <Stack.Screen
        name="AvailParkingSpace"
        component={AvailParkingSpaceScreen}
      />
      <Stack.Screen
        name="AvailStorageSpace"
        component={AvailStorageSpaceScreen}
      />
      <Stack.Screen name="BookSpace" component={BookSpaceScreen} />

      <Stack.Screen name="SharedSpaces" component={SharedSpacesScreen} />
      <Stack.Screen
        name="SpaceBookingRequests"
        component={SpaceBookingRequestsScreen}
      />

      <Stack.Screen name="AddSpace" component={AddSpaceScreen} />

      <Stack.Screen
        name="ShareLivingSpace"
        component={ShareLivingSpaceFormScreen}
      />
      <Stack.Screen
        name="ShareWorkingSpace"
        component={ShareWorkingSpaceFormScreen}
      />
      <Stack.Screen
        name="ShareEventSpace"
        component={ShareEventSpaceFormScreen}
      />
      <Stack.Screen
        name="ShareParkingSpace"
        component={ShareParkingSpaceFormScreen}
      />
      <Stack.Screen
        name="ShareStorageSpace"
        component={ShareStorageSpaceFormScreen}
      />
    </Stack.Navigator>
  );
}

export default SpaceShareNavigator;
