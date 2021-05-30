import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EventScreen from '../../screens/ModulesScreens/EventsScreens';
import CreateEventScreen from '../../screens/ModulesScreens/EventsScreens/CreateEvent';
import EventDetails from '../../screens/ModulesScreens/EventsScreens/EventDetails';
import CreateEventSharings from '../../screens/ModulesScreens/EventsScreens/CreateEventSharing';
const Stack = createStackNavigator();

function InboxNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="EventHomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EventHomeScreen" component={EventScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen
        name="CreateEventSharings"
        component={CreateEventSharings}
      />
    </Stack.Navigator>
  );
}

export default InboxNavigator;
