import React from 'react';
import {View} from 'react-native';
import {SectionHeadingText} from 'res/UniversalComponents/Text.js';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';
import styles from './style';
import DRCaseImage from 'res/images/ModulesImages/GeneralImages/myLocation.png';
import ShareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';
import ShareSpace from 'res/images/ModulesImages/SpaceSharingImages/selectHome.png';

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
    <View style={styles.recommendedArea}>
      <View style={styles.recommendedAreaTitleText}>
        <SectionHeadingText>Recommended Shares</SectionHeadingText>
      </View>
      <View style={styles.recommendedFlatlistArea}>
        <HorizontalFlatList data={data} screen='RecentlySharedScreen' />
      </View>
    </View>
  );
};

export default Component;
