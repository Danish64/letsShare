import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import RequestListItem from './RequestListItem';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({navigation, data}) => {
  const route = useRoute();

  const shareId = data._id;
  console.log('Share Id', shareId);
  console.log('Request List item bookings', data.bookings);
  return (
    <FlatList
      data={data ? data.bookings : FlatListData}
      renderItem={({item}) => (
        <RequestListItem
          shareId={shareId}
          item={item}
          onPress={() => {
            // navigation.navigate('SharedRideDetail', {item: item});
          }}
        />
      )}
      style={styles.FlatListStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
