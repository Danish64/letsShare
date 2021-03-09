import React from 'react';
import {FlatList} from 'react-native';
import HorizontalFlatListItem from './HorizontalFlatListItem';
import FlatListItem from '../../GeneralComponents/HorizontalFlatList/FlatListItem';
import {useNavigation} from '@react-navigation/native';
import {FlatListData} from 'res/constants/dummyData.js';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';

import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({data, isRecentlyShared, navigation, screen, onPress}) => {
  //to use styles -> {styles.propertyName}'
  // console.log(data)
  // const navigation = useNavigation();
  return (
    <FlatList
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <FlatListItem
          title={item.title}
          rideType={item.rideType}
          image={item.image}
          description={item.description}
          price={item.price}
          fare={item.fare}
          startLocation={item.startLocation}
          destinationLocation={item.destinationLocation}
          seatsAvailable={item.seatsAvailable}
          location={item.location}
          pickupLocation={item.pickupLocation}
          onPress={() => {

            onPress ? onPress : navigation.navigate(screen, {item: item});

          }}
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Component;
