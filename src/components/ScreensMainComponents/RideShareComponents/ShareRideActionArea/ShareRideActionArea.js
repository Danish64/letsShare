import React from 'react';
import {
  HeadingText,
  GroupLabelText,
  ShareActionAreaHeadingText,
  TextButton,
} from 'res/UniversalComponents/Text.js';
import {
  PrimaryButton,
  PrimaryIconButton,
  OutlinedButton,
} from 'res/UniversalComponents/Button.js';

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
    <View style={styles.shareRideComponentArea}>
      {/* <Image resizeMode="cover" style={styles.imageStyle} source={image} /> */}
      <View style={styles.shareRideTitleText}>
        <ShareActionAreaHeadingText>
          Wanna Share Ride?
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareRideButtonView}>
        <PrimaryIconButton
          iconName="car-outline"
          onPress={() => navigation.navigate('CreateRideScreen')}>
          Share Ride
        </PrimaryIconButton>
      </View>
    </View>
  );
};

export default Component;
