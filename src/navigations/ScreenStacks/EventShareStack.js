import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EventScreen from '../../screens/ModulesScreens/EventsScreens';

const Stack = createStackNavigator();

function InboxNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="EventHomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EventHomeScreen" component={EventScreen} />
    </Stack.Navigator>
  );
}

export default InboxNavigator;
