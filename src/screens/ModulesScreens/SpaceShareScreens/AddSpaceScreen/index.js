import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import AddSpaceForm from '../../../../components/ScreensMainComponents/SpaceShareComponents/SpaceForms/ShareForms/AddSpaceForm';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Add Space" navigation={navigation} hasBackIcon />
      <AddSpaceForm />
    </Container>
  );
};

export default Component;
