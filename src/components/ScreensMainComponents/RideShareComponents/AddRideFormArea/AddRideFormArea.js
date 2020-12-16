import React from 'react';
import {
  ShareActionAreaHeadingText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import AddRide from 'res/images/ModulesImages/RideSharingImages/AddRide.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.createRideComponentArea}>
      <View style={styles.pngImageArea}>
        <Image
          resizeMode="contain"
          source={AddRide}
          style={styles.imageContainer}
        />
      </View>
      <View style={styles.formArea}>
        <Text>Add Ride Form Area</Text>
      </View>
    </View>
  );
};

export default Component;
