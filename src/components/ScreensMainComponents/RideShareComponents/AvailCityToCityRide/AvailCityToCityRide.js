import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AvailRidesList from '../../../GeneralComponents/AvailRidesList';
import {shareRidesData} from '../../../../res/constants/dummyData';
import {set} from 'react-native-reanimated';

const Component = ({navigation}) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    filterRides();
  }, []);

  const filterRides = () => {
    const CityRide = [];
    shareRidesData.map((item) => {
      if (item.rideType === 'City to City Ride') {
        CityRide.push(item);
      }
    });
    setItems(CityRide);
  };
  return (
    <View>
      <AvailRidesList
        data={items}
        navigation={navigation}
        screen="RecentlySharedRideScreen"
      />
    </View>
  );
};
export default Component;
