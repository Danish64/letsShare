import React from 'react';
import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import {View, TouchableOpacity, Text} from 'react-native';
import NearbyRideImage from 'res/images/DummyImages/nearByRide.jpg';
import CityToCityRideImage from 'res/images/DummyImages/cityToCity.jpg';
import TourRideImage from 'res/images/DummyImages/tourRide.jpg';

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
      <TextImageContainer text="Nearby Rides" image={NearbyRideImage} />

      <TextImageContainer
        text="City to City Rides"
        image={CityToCityRideImage}
      />
      <TextImageContainer text="Tour Rides" image={TourRideImage} />
    </View>
  );
};

export default Component;
