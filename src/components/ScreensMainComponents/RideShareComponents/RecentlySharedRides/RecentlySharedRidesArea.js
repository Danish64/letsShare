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
      seats: '3',
      location: 'G11/3,Islamabad to G13/1,Islamabad',
    },
    {
      id: '2',
      title: 'City to City Ride',
      image: CTCCaseImage,
      price: '1000 Rs',
      seats: '2',
      location: 'Islamabad to Lahore',
    },
    {
      id: '3',
      title: 'Tour Ride',
      image: DRCaseImage,
      price: '2500 Rs',
      seats: '3',
      location: 'Islamabad to Swat',
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
