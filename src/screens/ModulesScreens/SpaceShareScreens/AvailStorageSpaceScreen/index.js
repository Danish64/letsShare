import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Avail Storage Space" navigation={navigation} hasBackIcon />
      <Text>Avail Storage Space Screen</Text>
    </Container>
  );
};

export default Component;
