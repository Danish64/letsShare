import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import CreateSpaceActionArea from '../../../../components/ScreensMainComponents/SpaceShareComponents/CreateSpaceActionArea';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Space Share" navigation={navigation} hasBackIcon />
      <CreateSpaceActionArea />
    </Container>
  );
};

export default Component;
