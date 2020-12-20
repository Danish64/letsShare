import React from 'react';
import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import RideOrder from 'res/images/ModulesImages/RideSharingImages/orderRide.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availRideComponentArea}>
      <View style={styles.availRideTitleText}>
        <ShareActionAreaHeadingText>Avail Ride</ShareActionAreaHeadingText>
      </View>
      <View style={styles.categoriesArea}>
        <TextImageContainer text="Nearby Rides" />
        <TextImageContainer text="City to City Rides" />
        <TextImageContainer text="Tour Rides" />
      </View>
    </View>
  );
};

export default Component;
