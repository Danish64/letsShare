import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import {
  HeadingText,
  SubtitleTextBlack,
  AvailCategoryTextGrey,
} from 'res/UniversalComponents/Text.js';
import styles from './style';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, label, onPress}) => {
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity onPress={onPress} style={styles.modalView}>
        <SubtitleTextBlack>{label}</SubtitleTextBlack>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
