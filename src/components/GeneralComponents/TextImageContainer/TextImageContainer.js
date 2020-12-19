import React from 'react';
import {
  ImageTextBold,
  HeadingText,
  ShareActionAreaHeadingText,
  AvailCategoryTextGrey,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {View, Image, Text, TouchableOpacity} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({image, text, onPress}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.componentArea}>
        <Image
          resizeMode="cover"
          style={styles.imageContainer}
          source={image}
        />
        <View style={styles.textStyle}>
          <AvailCategoryTextGrey>{text}</AvailCategoryTextGrey>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
