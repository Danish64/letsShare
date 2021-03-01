import React from 'react';
import {Text, ScrollView} from 'react-native';
import {PasswordActionArea} from '../../../ScreensMainComponents/AuthenticationComponents/index';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import IllustrationContainer from '../../../../components/GeneralComponents/IllustrationContainer';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <PasswordActionArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
