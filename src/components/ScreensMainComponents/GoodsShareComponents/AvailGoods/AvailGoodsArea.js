import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availGoodsComponentArea}>
      <View style={styles.availGoodsTitleText}>
        <ShareActionAreaHeadingText>Avail Goods</ShareActionAreaHeadingText>
      </View>

      <View style={styles.myAvailedGoodsButtonView}>
        <OutlinedActionIconButton
          iconName="eye"
          onPress={() => navigation.navigate('AvailedGoods')}>
          My Availed Goods
        </OutlinedActionIconButton>
      </View>

      <TextImageContainer 
        text="Donated Goods" 
        onPress={() => navigation.navigate('AvailDonatedGoodsScreen')}
        // image={DonateGoods} 
      />

      <TextImageContainer
        text="Buy Goods"
        onPress={() => navigation.navigate('AvailGoodsScreen')}
        // image={SellGoods}
      />
    </View>
  );
};

export default Component;
