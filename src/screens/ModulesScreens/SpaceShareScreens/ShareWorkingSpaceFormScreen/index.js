import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Share Working Space" navigation={navigation} hasBackIcon />
      <Text>Share Working Space Form Screen</Text>
    </Container>
  );
};

export default Component;
