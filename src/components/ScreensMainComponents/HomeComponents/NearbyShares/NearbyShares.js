import React from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';
import {SectionHeadingText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import DRCaseImage from 'res/images/ModulesImages/GeneralImages/myLocation.png';
import ShareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';
import ShareSpace from 'res/images/ModulesImages/SpaceSharingImages/selectHome.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  const data = [
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
      title: 'Goods Share',
      image: ShareGoods,
      description: 'Book: A Silent Patient',
      location: 'KRL Road, Khanah Pul, Rawalpindi',
    },
    {
      id: '3',
      title: 'Space Sharing',
      description: 'Single Bedroom',
      image: ShareSpace,
      location: 'Warda Hamna Residencia, G11/3, Islamabad ',
    },
  ];

  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.nearByShareTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList data={data} />
      </View>
    </View>
  );
};

export default Component;
