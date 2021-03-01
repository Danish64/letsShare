import React from 'react';
import {FlatList} from 'react-native';
import HorizontalFlatListItem from './HorizontalFlatListItem';
import FlatListItem from '../../GeneralComponents/HorizontalFlatList/FlatListItem';

import {FlatListData} from 'res/constants/dummyData.js';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';

import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({data, isRecentlyShared}) => {
  //to use styles -> {styles.propertyName}'
  // console.log(data)
  return (
    <FlatList
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <FlatListItem
          title={item.title}
          image={item.image}
          price={item.price}
          priceIcon={item.priceIcon}
          quantity={item.seats}
          quantityIcon={item.seatsIcon}
          location={item.route}
          locationIcon={item.routeIcon}
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Component;
