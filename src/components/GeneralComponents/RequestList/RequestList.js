import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import RequestListItem from './RequestListItem';

const Component = ({navigation, data}) => {
  console.log('Request List', data.bookings);
  return (
    <FlatList
      data={data ? data.bookings : FlatListData}
      renderItem={({item}) => (
        <RequestListItem
          item={item}
          onPress={() => {
            // navigation.navigate('SharedRideDetail', {item: item});
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
