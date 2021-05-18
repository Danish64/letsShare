import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import AddSpaceForm from '../../../../components/ScreensMainComponents/SpaceShareComponents/SpaceForms/ShareForms/AddSpaceForm';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Add Space" navigation={navigation} hasBackIcon />
      <ScrollViewContainer>
        <AddSpaceForm navigation={navigation} />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
