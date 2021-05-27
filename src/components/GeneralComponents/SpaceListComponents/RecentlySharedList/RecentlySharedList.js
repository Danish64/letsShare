import React from 'react';
import {FlatList} from 'react-native';
import SpacesListItem from './SpacesListItem';
import {useNavigation} from '@react-navigation/native';
import {FlatListData} from 'res/constants/dummyData.js';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../LoadingIndicator';

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
        <SpacesListItem
          id={item._id}
          item={item}
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
