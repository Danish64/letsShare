import React from 'react';
import {FlatList} from 'react-native';
import HorizontalFlatListItem from './HorizontalFlatListItem';
import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({data, containerStyle, isRecentlyShared}) => {
  //to use styles -> {styles.propertyName}'
  // console.log(data)
  return (
    <FlatList
      data={data}
      renderItem={HorizontalFlatListItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={containerStyle}
    />
  );
};

export default Component;
