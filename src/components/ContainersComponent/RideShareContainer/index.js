import React from 'react';
import {
  ShareRideActionArea,
  RecentlySharedRideArea,
  AvailRideArea,
} from '../../ScreensMainComponents/RideShareComponents';
import {ScrollView, View, Text} from 'react-native';
import styles from 'res/styles/index.styles.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <ShareRideActionArea navigation={navigation} />
      <RecentlySharedRideArea navigation={navigation} />
      <AvailRideArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
