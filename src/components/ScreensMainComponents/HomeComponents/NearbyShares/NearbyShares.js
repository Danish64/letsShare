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
      priceIcon: 'cash-outline',
      seats: '3',
      seatsIcon: 'people-outline',
      route: 'G11/3,Islamabad to G13/1,Islamabad',
      routeIcon: 'navigate-outline',
    },
    {
      id: '2',
      title: 'Goods Share',
      image: ShareGoods,
      price: '1000 Rs',
      priceIcon: 'cash-outline',
      // seats: '2',
      // seatsIcon: 'people-outline',
      route: 'Islamabad to Lahore',
      routeIcon: 'navigate-outline',
    },
    {
      id: '3',
      title: 'Space Sharing',
      image: ShareSpace,
      price: '5000 Rs/Month',
      priceIcon: 'cash-outline',
      // seats: '3',
      // seatsIcon: 'people-outline',
      route: 'Warda Hamna Residencia, G11/3, Islamabad ',
      routeIcon: 'navigate-outline',
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
