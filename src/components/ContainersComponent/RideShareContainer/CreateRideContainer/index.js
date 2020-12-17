import React from 'react';
import {
  AvailRideArea,
  CreateRideActionArea,
} from '../../../ScreensMainComponents/RideShareComponents';
import {ScrollView, View, Text} from 'react-native';
import styles from 'res/styles/index.styles.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <CreateRideActionArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
