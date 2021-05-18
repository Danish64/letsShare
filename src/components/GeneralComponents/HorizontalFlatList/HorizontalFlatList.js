import React from 'react';
import {FlatList} from 'react-native';
import HorizontalFlatListItem from './HorizontalFlatListItem';
import FlatListItem from '../../GeneralComponents/HorizontalFlatList/FlatListItem';
import {useNavigation} from '@react-navigation/native';
import {FlatListData} from 'res/constants/dummyData.js';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../GeneralComponents/LoadingIndicator';

import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({data, isRecentlyShared, navigation, screen, onPress}) => {
  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      data={data ? data : FlatListData}
      keyExtractor={(item, index) => item.key}
      renderItem={({item}) => (
        <FlatListItem
          title={item.title}
          description={item.description}
          price={item.price}
          location={item.location}
          itemId={item._id}
          item={item}
          image={item.image}
          fare={item.fare}
          rideCategory={item.rideCategory}
          startLocation={item.startLocation}
          destinationLocation={item.destinationLocation}
          seatsAvailable={item.seatsAvailable}
          pickupLocation={item.pickupLocation}
          onPress={() => {
            onPress ? onPress : navigation.navigate(screen, {item: item});
          }}
        />
      )}
      style={styles.FlatListStyle}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Component;
