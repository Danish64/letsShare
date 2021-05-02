import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import RequestListItem from './RequestListItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import LoadingIndicator from '../LoadingIndicator';

const Component = ({navigation, data}) => {
  const route = useRoute();

  const shareId = data._id;

  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      data={data ? data.bookings : FlatListData}
      renderItem={({item}) => (
        <RequestListItem key={data._id} shareId={shareId} item={item} />
      )}
      style={styles.FlatListStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
