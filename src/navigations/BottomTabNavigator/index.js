import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../ScreenStacks/HomeStack';
import SpaceShareStack from '../ScreenStacks/SpaceShareStack';
import RideShareStack from '../ScreenStacks/RideShareStack';
import FoodShareStack from '../ScreenStacks/FoodShareStack';
import GoodsShareStack from '../ScreenStacks/GoodsShareStack';
import EventStack from '../ScreenStacks/EventManageStack';
import Inbox from '../../screens/ModulesScreens/InboxScreen';
import Utilities from '../../screens/ModulesScreens/UtilitiesScreen';
import UserManagerStack from '../ScreenStacks/UserManagerStack';
import styles from 'res/styles/index.styles.js';
import {
  BottomTabText,
  BottomTabFocusedText,
} from 'res/UniversalComponents/Text.js';

const Tab = createBottomTabNavigator();
const activeColor = '#006D77';
const iconSize = 26;
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
            <Ionicons
              name="home-outline"
              color={focused ? activeColor : color}
              size={iconSize}
            />
          ),
          tabBarLabel: (props) => {
            if (props.focused) {
              return <BottomTabFocusedText>Home</BottomTabFocusedText>;
            } else {
              return <BottomTabText>Home</BottomTabText>;
            }
          },
        }}
      />
      <Tab.Screen
        name="SpaceStack"
        component={SpaceShareStack}
        options={{
          tabBarIcon: () => <Ionicons name="ios-business-outline" />,
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="ios-business-outline"
              color={focused ? activeColor : color}
              size={iconSize}
            />
          ),
          tabBarLabel: (props) => {
            if (props.focused) {
              return <BottomTabFocusedText>Spaces</BottomTabFocusedText>;
            } else {
              return <BottomTabText>Spaces</BottomTabText>;
            }
          },
        }}
      />
      <Tab.Screen
        name="RideStack"
        component={RideShareStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="car-outline"
              color={focused ? activeColor : color}
              size={iconSize}
            />
          ),
          tabBarLabel: (props) => {
            if (props.focused) {
              return <BottomTabFocusedText>Rides</BottomTabFocusedText>;
            } else {
              return <BottomTabText>Rides</BottomTabText>;
            }
          },
        }}
      />
      <Tab.Screen
        name="Utilities"
        component={Utilities}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="basket-outline"
              color={focused ? activeColor : color}
              size={iconSize}
            />
          ),
          tabBarLabel: (props) => {
            if (props.focused) {
              return <BottomTabFocusedText>Utilities</BottomTabFocusedText>;
            } else {
              return <BottomTabText>Utilities</BottomTabText>;
            }
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="chatbox-outline"
              color={focused ? activeColor : color}
              size={iconSize}
            />
          ),
          tabBarLabel: (props) => {
            if (props.focused) {
              return <BottomTabFocusedText>Inbox</BottomTabFocusedText>;
            } else {
              return <BottomTabText>Inbox</BottomTabText>;
            }
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={UserManagerStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="person-outline"
              size={iconSize}
              color={focused ? activeColor : color}
            />
          ),
          tabBarLabel: (props) => {
            if (props.focused) {
              return <BottomTabFocusedText>Profile</BottomTabFocusedText>;
            } else {
              return <BottomTabText>Profile</BottomTabText>;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
