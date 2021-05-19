import React from 'react';
import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import {View, TouchableOpacity, Text} from 'react-native';

import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availFoodComponentArea}>
      <View style={styles.availFoodTitleText}>
        <ShareActionAreaHeadingText>Avail Food</ShareActionAreaHeadingText>
      </View>
      <View style={styles.myAvailedFoodButtonView}>
        <OutlinedActionIconButton
          iconName="eye"
          onPress={() => navigation.navigate('AvailedFood')}>
          My Availed Food
        </OutlinedActionIconButton>
      </View>
      <View style={styles.categoriesArea}>
        <TextImageContainer
          text="Donated Food"
          onPress={() => navigation.navigate('AvailDonatedFood')}
        />

        <TextImageContainer
          text="Buy Food"
          onPress={() => navigation.navigate('AvailBuyFood')}
        />
        <TextImageContainer
          text="Food Stall"
          onPress={() => navigation.navigate('AvailStallFood')}
        />
      </View>
    </View>
  );
};

export default Component;
