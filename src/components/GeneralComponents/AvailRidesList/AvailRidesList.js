import React from 'react';
import {FlatList} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import AvailRidesListItem from './AvailRidesListItem';
import LoadingIndicator from '../../../components/GeneralComponents/LoadingIndicator';

const Component = ({navigation, data, listFor}) => {
  if (!data) {
    return <LoadingIndicator />;
  }
  return (
    <FlatList
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <AvailRidesListItem
          key={item._id}
          itemId={item._id}
          item={item}
          image={item.image}
          rideName={item.rideName}
          registrationNo={item.registrationNumber}
          fare={item.fare}
          rideCategory={item.rideCategory}
          startLocation={item.startLocation}
          destinationLocation={item.destinationLocation}
          seatsAvailable={item.seatsAvailable}
          pickupLocation={item.pickupLocation}
          onPress={() =>
            navigation.navigate('AvailRideDetail', {
              item: item,
              listFor: listFor,
            })
          }
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
