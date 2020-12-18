import React from 'react';
import {
  HeadingText,
  GroupLabelText,
  TextButton,
  ShareActionAreaHeadingText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';

import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import CreateMyAssetList from '../../../GeneralComponents/CreateMyAssetList';
import ShareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.createGoodsComponentArea}>
      <View style={styles.createdGoodsArea}>
        <View style={styles.myGoodsTitleText}>
          <ShareActionAreaHeadingText>Select Goods</ShareActionAreaHeadingText>
        </View>

        <View style={styles.myGoodsListArea}>
          <CreateMyAssetList navigation={navigation} />
        </View>
      </View>
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
