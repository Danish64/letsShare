import React from 'react';
import {
  CreateFoodActionArea,
} from '../../../ScreensMainComponents/FoodShareComponents';
import {ScrollView, View, Text} from 'react-native';
import styles from 'res/styles/index.styles.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <CreateFoodActionArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
