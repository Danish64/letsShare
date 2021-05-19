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
      renderItem={({item}) => (
        <FlatListItem
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
