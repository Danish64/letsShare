import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import VerticalFlatList from '../../../GeneralComponents/VerticalFlatList';
import {shareRidesData} from '../../../../res/constants/dummyData';

const Component = ({navigation}) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    filterRides();
  }, []);

  const filterRides = () => {
    const CityRide = [];
    shareRidesData.map((item) => {
      if (item.rideType === 'Nearby Ride') {
        CityRide.push(item);
      }
    });
    setItems(CityRide);
  };
  return (
    <View>
      <VerticalFlatList
        data={items}
        navigation={navigation}
        screen="RecentlySharedRideScreen"
      />
    </View>
  );
};
export default Component;
