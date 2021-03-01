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
      <View style={styles.modalView}>
        <View style={styles.itemView}>
          <TouchableOpacity onPress={onPress}>
            <SubtitleTextBlack>{label}</SubtitleTextBlack>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
