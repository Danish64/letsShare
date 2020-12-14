import React from 'react';
import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {View, TouchableOpacity, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availGoodsComponentArea}>
      <View style={styles.availGoodsTitleText}>
        <ShareActionAreaHeadingText>Avail Goods</ShareActionAreaHeadingText>
      </View>
    </View>
  );
};

export default Component;
