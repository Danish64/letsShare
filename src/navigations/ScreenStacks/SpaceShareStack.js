import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SpaceShareHomeScreen from '../../screens/ModulesScreens/SpaceShareScreens/Home';
import AvailSpaceDetailScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailSpaceDetailScreen';
import AvailedSpacesScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailedSpacesScreen';
import AvailLivingSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailLivingSpaceScreen';
import AvailWorkingSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailWorkingSpaceScreen';
import AvailEventSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailEventSpaceScreen';
import AvailParkingSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailParkingSpaceScreen';
import AvailStorageSpaceScreen from '../../screens/ModulesScreens/SpaceShareScreens/AvailStorageSpaceScreen';
import CreateSpaceShareScreen from '../../screens/ModulesScreens/SpaceShareScreens/CreateSpaceShare';

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
        name="AvailLivingSpace"
        component={AvailLivingSpaceScreen}
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
    </Stack.Navigator>
  );
}

export default SpaceShareNavigator;
