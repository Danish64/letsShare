import React from 'react';
import {
  HeadingText,
  GroupLabelText,
  ShareActionAreaHeadingText,
  TextButton,
} from 'res/UniversalComponents/Text.js';
import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import image from 'res/images/DummyImages/shareRide.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareFoodComponentArea}>
      <View style={styles.shareFoodTitleText}>
        <ShareActionAreaHeadingText>
          Got some food to share?
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareFoodButtonView}>
        <OutlinedActionIconButton
          onPress={() => navigation.navigate('CreateFoodScreen')}
          iconName="add-outline">
          Share your Food
        </OutlinedActionIconButton>
      </View>
    </View>
  );
};

export default Component;
