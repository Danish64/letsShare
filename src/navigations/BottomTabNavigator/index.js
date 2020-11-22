import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabIcon from '../../components/BottomTabComponents/BottomTabIcon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../ScreenStacks/HomeStack';
import SpaceShareStack from '../ScreenStacks/SpaceShareStack';
import RideShareStack from '../ScreenStacks/RideShareStack';
import Inbox from '../../screens/ModulesScreens/InboxScreen';
import Utilities from '../../screens/ModulesScreens/UtilitiesScreen';
import UserManagerStack from '../ScreenStacks/UserManagerStack';
import styles from 'res/styles/index.styles.js';

import {
  BottomTabText,
  BottomTabFocusedText,
} from 'res/UniversalComponents/Text.js';

const Tab = createBottomTabNavigator();

const TabBarLabel = ({focused, Title}) => {
  if (focused) {
    return <BottomTabFocusedText>{Title}</BottomTabFocusedText>;
  } else {
    return <BottomTabText>{Title}</BottomTabText>;
  }
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        allowFontScaling: true,
        style: styles.bottomTabHeight,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="home-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="SpaceStack"
        component={SpaceShareStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="ios-business-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Spaces" />
          ),
        }}
      />
      <Tab.Screen
        name="RideStack"
        component={RideShareStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon name="car-outline" color={color} focused={focused} />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Rides" />
          ),
        }}
      />
      <Tab.Screen
        name="Utilities"
        component={Utilities}
        options={{
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="basket-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Utilities" />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="chatbox-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Inbox" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={UserManagerStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <BottomTabIcon
              name="person-outline"
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: ({focused}) => (
            <TabBarLabel focused={focused} Title="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
