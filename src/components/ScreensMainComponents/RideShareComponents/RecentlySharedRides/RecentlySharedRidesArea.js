import React from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList/';
import DRCaseImage from 'res/images/ModulesImages/GeneralImages/myLocation.png';
import CTCCaseImage from 'res/images/ModulesImages/RideSharingImages/orderRide.png';

import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';

import {
  NearbyRides,
  CityToCityRides,
  TourRides,
  shareRidesData,
} from 'res/constants/dummyData';


//Native Exports Ends Here

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}

  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.shareRideTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
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
