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
  OutlinedActionIconButton,
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
          Got a ride to share?
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareRideButtonView}>
        <OutlinedActionIconButton
          onPress={() => navigation.navigate('CreateRideScreen')}
          iconName="add-outline">
          Share your Ride
        </OutlinedActionIconButton>
      </View>
    </View>
  );
};

export default Component;
