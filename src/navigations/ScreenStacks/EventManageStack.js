import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EventHomeScreen from '../../screens/ModulesScreens/EventsScreens';

const Stack = createStackNavigator();

function EventNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EventHome" component={EventHomeScreen} />
    </Stack.Navigator>
  );
}

export default EventNavigator;
