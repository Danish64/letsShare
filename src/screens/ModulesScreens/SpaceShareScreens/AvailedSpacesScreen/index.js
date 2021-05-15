import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="My Availed Spaces" navigation={navigation} hasBackIcon />
      <Text>Availed Spaces Screen</Text>
    </Container>
  );
};

export default Component;
