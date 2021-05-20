import React from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList/';
import styles from './style';

import {
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';

import {
  shareRidesData,
} from 'res/constants/dummyData';

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
  <View style={styles.nearBySharesArea}>
    <View style={styles.shareSpaceitleText}>
      <SectionHeadingText>Recently Shared Spaces</SectionHeadingText>
    </View>
    <View style={styles.recentlySharedFlatlistArea}>

      <HorizontalFlatList
        data={shareRidesData}
        navigation={navigation}
        screen="RecentlySharedRideScreen"
      />

    </View>
  </View>
  );
};

export default Component;
