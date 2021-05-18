import React from 'react';
import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import {View, TouchableOpacity, Text} from 'react-native';
import DonateGoods from 'res/images/DummyImages/DonateGoods.jpeg';
import SellGoods from 'res/images/DummyImages/SellGoods.jpeg';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availFoodComponentArea}>
      <View style={styles.availFoodTitleText}>
        <ShareActionAreaHeadingText>Avail Food</ShareActionAreaHeadingText>
      </View>
      <TextImageContainer
        text="Donated Food"
        onPress={() => navigation.navigate('AvailDonatedFoodScreen')}
      />

      <TextImageContainer
        text="Buy Food"
        onPress={() => navigation.navigate('AvailFoodScreen')}
        // image={SellGoods}
      />

      <TextImageContainer
        text="Food Stalls"
        // image={SellGoods}
      />
    </View>
  );
};

export default Component;
