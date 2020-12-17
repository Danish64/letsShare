import React from 'react';
import {
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import {
  GoodsIconButton,
} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import image from 'res/images/DummyImages/shareGoods.jpeg';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareFoodComponentArea}>
      {/* <Image resizeMode="cover" style={styles.imageStyle} source={image} /> */}
      <View style={styles.shareFoodTitleText}>
        <ShareActionAreaHeadingText>
          Wanna Share Food?
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareFoodButtonView}>
        <GoodsIconButton onPress={() => navigation.navigate('CreateFoodScreen')}> Share Food</GoodsIconButton>
      </View>
    </View>
  );
};

export default Component;
