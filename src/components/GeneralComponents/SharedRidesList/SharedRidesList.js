import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import SharedRidesListItem from './SharedRidesListItem';

const Component = ({navigation, data, screen}) => {
  console.log('Data from New Api, Rola Behn cheki', data);
  return (
    <FlatList
      data={data ? data : FlatListData}
      // key={Math.floor(Math.random() * 10)}
      renderItem={({item}) => (
        <SharedRidesListItem
          key={item._id}
          item={item}
          startLocation={item.startLocation}
          destinationLocation={item.destinationLocation}
          ridePicture={item.ridePictures}
          rideCategory={item.rideCategory}
          isAvailable={item.isAvailable}
          userId={item._id}
          sharerId={item.sharerId}
          rideName={item.rideName}
          registrationNo={item.registrationNumber}
          rideType={item.rideType}
          ownerContactNumber={item.ownerContactNumber}
          fare={item.fare}
          seatsAvailable={item.seatsAvailable.toString()}
          image={item.image}
          onPress={() => {
            navigation.navigate('SharedRideDetail', {item: item});
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
