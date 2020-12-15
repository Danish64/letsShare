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

const Component = () => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availRideComponentArea}>
      <View style={styles.availRideTitleText}>
        <ShareActionAreaHeadingText>Avail Goods</ShareActionAreaHeadingText>
      </View>
      <TextImageContainer text="Donate Goods" image={DonateGoods} />

      <TextImageContainer
        text="Sell Goods"
        image={SellGoods}
      />
    </View>
  );
};

export default Component;
