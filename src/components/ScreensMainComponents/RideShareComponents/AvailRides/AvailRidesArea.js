import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import RideOrder from 'res/images/ModulesImages/RideSharingImages/orderRide.png';
import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.availRideComponentArea}>
      <View style={styles.availRideTitleText}>
        <ShareActionAreaHeadingText>Avail Ride</ShareActionAreaHeadingText>
      </View>
      <View style={styles.myAvailedRidesButtonView}>
        <OutlinedActionIconButton
          iconName="eye"
          onPress={() => navigation.navigate('AvailedRidesScreen')}>
          My Availed Rides
        </OutlinedActionIconButton>
      </View>
      <View style={styles.categoriesArea}>
        <TextImageContainer
          text=" Avail Nearby Rides"
          onPress={() => navigation.navigate('AvailNearbyRideScreen')}
        />
        <TextImageContainer
          text="Avail City to City Rides"
          onPress={() => navigation.navigate('AvailCityToCityRideScreen')}
        />
        <TextImageContainer
          text="Avail Tour Rides"
          onPress={() => navigation.navigate('AvailTourRideScreen')}
        />
      </View>
    </View>
  );
};

export default Component;
