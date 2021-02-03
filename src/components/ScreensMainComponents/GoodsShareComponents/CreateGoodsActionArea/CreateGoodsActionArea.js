import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts
import {
  HeadingText,
  GroupLabelText,
  TextButton,
  ShareActionAreaHeadingText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';

import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import CreateMyGoodsList from '../../../GeneralComponents/CreateMyGoodsList';
import ShareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';
import { GoodsList } from '../../../../res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation}) => {
  return (
    <View style={styles.createGoodsComponentArea}>

      {/* Select/Add Goods */}
      <View style={styles.createdGoodsArea}>
        <View style={styles.myGoodsTitleText}>
          <ShareActionAreaHeadingText>Select Goods</ShareActionAreaHeadingText>
        </View>
        <View style={styles.myGoodsListArea}>
          <CreateMyGoodsList 
            navigation={navigation} 
            GoodsList={GoodsList}
          />
        </View>
      </View>

      {/* Select Share Type */}
      <View style={styles.selectGoodsTypeArea}>
        <View style={styles.myGoodsTitleText}>
          <SectionHeadingText>Select Goods Type</SectionHeadingText>
        </View>
        <View style={styles.categoryButtonsArea}>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Donate 
          </CategoryOutlinedButton>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Sell 
          </CategoryOutlinedButton>
        </View>
        <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={ShareGoods}
            style={styles.imageContainer}
          />
        </View>
      </View>
    </View>
  );
};

export default Component;
