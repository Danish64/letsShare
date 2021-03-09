import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InboxScreen from '../../screens/ModulesScreens/InboxScreen';
import ChatScreen from '../../screens/ModulesScreens/InboxScreen/ChatUI';

const Stack = createStackNavigator();

function InboxNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="InboxScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="InboxScreen" component={InboxScreen} />

      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default InboxNavigator;
