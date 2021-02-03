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
import CreateMyFoodList from '../../../GeneralComponents/CreateMyFoodList';
import ShareFood from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.createFoodComponentArea}>
      <View style={styles.createdFoodArea}>
        <View style={styles.myFoodTitleText}>
          <ShareActionAreaHeadingText>Select Food</ShareActionAreaHeadingText>
        </View>

        <View style={styles.myFoodListArea}>
          <CreateMyFoodList navigation={navigation} />
        </View>
      </View>
      <View style={styles.selectFoodTypeArea}>
        <View style={styles.myGoodsTitleText}>
          <SectionHeadingText>Select Food Type</SectionHeadingText>
        </View>
        <View style={styles.categoryButtonsArea}>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Donate 
          </CategoryOutlinedButton>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Sell 
          </CategoryOutlinedButton>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Food Stall
          </CategoryOutlinedButton>
        </View>
        <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={ShareFood}
            style={styles.imageContainer}
          />
        </View>
      </View>
    </View>
  );
};

export default Component;
