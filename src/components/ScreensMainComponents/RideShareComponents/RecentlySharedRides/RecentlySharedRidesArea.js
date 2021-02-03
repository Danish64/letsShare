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

//Native Exports Ends Here

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}

  const testData = [
    {
      id: '1',
      title: 'Daily Ride',
      image: DRCaseImage,
      price: '200 Rs',
      priceIcon: 'cash-outline',
      seats: '3',
      seatsIcon: 'people-outline',
      route: 'G11/3,Islamabad to G13/1,Islamabad',
      routeIcon: 'navigate-outline',
    },
    {
      id: '2',
      title: 'City to City Ride',
      image: CTCCaseImage,
      price: '1000 Rs',
      priceIcon: 'cash-outline',
      seats: '2',
      seatsIcon: 'people-outline',
      route: 'Islamabad to Lahore',
      routeIcon: 'navigate-outline',
    },
    {
      id: '3',
      title: 'Tour Ride',
      image: DRCaseImage,
      price: '2500 Rs',
      priceIcon: 'cash-outline',
      seats: '3',
      seatsIcon: 'people-outline',
      route: 'Islamabad to Swat',
      routeIcon: 'navigate-outline',
    },
  ];

  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.shareRideTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList data={testData} />
      </View>
    </View>
  );
};

export default Component;
