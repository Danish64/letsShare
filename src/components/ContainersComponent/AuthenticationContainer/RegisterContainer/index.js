import React from 'react';
import {Text, ScrollView} from 'react-native';
import {RegisterUserFormArea} from '../../../ScreensMainComponents/AuthenticationComponents/index';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import IllustrationContainer from '../../../../components/GeneralComponents/IllustrationContainer';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation); check navigation asad-dev

  return (
    <ScrollViewContainer>
      <RegisterUserFormArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
