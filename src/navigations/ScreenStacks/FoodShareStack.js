import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodShareHomeScreen from '../../screens/ModulesScreens/FoodShareScreens';
import CreateFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen';
import RecentlySharedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/RecentlySharedFoodScreen';
import AvailFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailFoodScreen';
import AvailDonatedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailDonatedFoodScreen';
import AvailFoodStalls from '../../screens/ModulesScreens/FoodShareScreens/AvailFoodStalls';
import AddFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/AddFoodScreen';
import DonateFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/DonateFoodScreen';
import SellFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/SellFoodScreen';
import MySharedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/MySharedFoodScreen';
import FoodBookingRequestsScreen from '../../screens/ModulesScreens/FoodShareScreens/FoodBookingRequestsScreen';

const Stack = createStackNavigator();

function FoodShareNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FoodShareHome" component={FoodShareHomeScreen} />
      <Stack.Screen name="MySharedFood" component={MySharedFoodScreen} />
      <Stack.Screen
        name="FoodBookingRequests"
        component={FoodBookingRequestsScreen}
      />

      <Stack.Screen name="CreateFoodScreen" component={CreateFoodScreen} />
      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} />
      <Stack.Screen name="DonateFoodScreen" component={DonateFoodScreen} />
      <Stack.Screen name="SellFoodScreen" component={SellFoodScreen} />
      <Stack.Screen
        name="RecentlySharedFoodScreen"
        component={RecentlySharedFoodScreen}
      />
      <Stack.Screen name="AvailFoodScreen" component={AvailFoodScreen} />
      <Stack.Screen
        name="AvailDonatedFoodScreen"
        component={AvailDonatedFoodScreen}
      />
      <Stack.Screen name="AvailFoodStalls" component={AvailFoodStalls} />
    </Stack.Navigator>
  );
}

export default FoodShareNavigator;
