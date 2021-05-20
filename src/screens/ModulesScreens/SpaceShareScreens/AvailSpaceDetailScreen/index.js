import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Space Detail" navigation={navigation} hasBackIcon />
      <Text>Avail Space Detail Screen</Text>
    </Container>
  );
};

export default Component;
