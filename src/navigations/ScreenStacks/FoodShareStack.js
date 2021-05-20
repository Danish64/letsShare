import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodShareHomeScreen from '../../screens/ModulesScreens/FoodShareScreens';
import CreateFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen';
import RecentlySharedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/RecentlySharedFoodScreen';
import AvailDonatedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailDonatedFoodScreen';
import AvailBuyFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailBuyFoodScreen';
import AvailFoodStallsScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailFoodStallsScreen';
import AddFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/AddFoodScreen';
import DonateFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/DonateFoodScreen';
import SellFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/SellFoodScreen';
import StallFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/CreateFoodScreen/StallFoodScreen';
import MySharedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/MySharedFoodScreen';
import FoodBookingRequestsScreen from '../../screens/ModulesScreens/FoodShareScreens/FoodBookingRequestsScreen';
import AvailFoodDetailScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailFoodDetailScreen';
import BookFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/BookFoodScreen';
import AvailedFoodScreen from '../../screens/ModulesScreens/FoodShareScreens/AvailedFoodScreen';

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
      <Stack.Screen name="StallFoodScreen" component={StallFoodScreen} />

      <Stack.Screen
        name="RecentlySharedFoodScreen"
        component={RecentlySharedFoodScreen}
      />
      <Stack.Screen
        name="AvailDonatedFood"
        component={AvailDonatedFoodScreen}
      />
      <Stack.Screen name="AvailBuyFood" component={AvailBuyFoodScreen} />
      <Stack.Screen name="AvailStallFood" component={AvailFoodStallsScreen} />
      <Stack.Screen name="AvailFoodDetail" component={AvailFoodDetailScreen} />
      <Stack.Screen name="BookFood" component={BookFoodScreen} />
      <Stack.Screen name="AvailedFood" component={AvailedFoodScreen} />
    </Stack.Navigator>
  );
}

export default FoodShareNavigator;
