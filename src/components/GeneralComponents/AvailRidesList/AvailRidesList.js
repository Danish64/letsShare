import React from 'react';
import {FlatList} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import AvailRidesListItem from './AvailRidesListItem';

const Component = ({navigation, data, screen}) => {
  return (
    <FlatList
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <AvailRidesListItem
          image={item.image}
          rideName={item.rideName}
          registrationNo={item.registrationNumber}
          fare={item.fare}
          rideCategory={item.rideCategory}
          startLocation={item.startLocation}
          destinationLocation={item.destinationLocation}
          seatsAvailable={item.seatsAvailable}
          pickupLocation={item.pickupLocation}
          onPress={() => {
            navigation.navigate('AvailRideDetail', {item: item});
          }}
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
