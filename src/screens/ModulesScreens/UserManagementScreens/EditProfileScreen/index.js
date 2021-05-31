import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import ProfileSetupForm from '../../../../components/ScreensMainComponents/UserManagementComponets/ProfileSetupForm';
import {connect} from 'react-redux';

const Component = ({navigation, userInfo}) => {
  return (
    <Container>
      <Header title="Profile Setup" navigation={navigation} hasBackIcon />
      <ScrollViewContainer>
        <ProfileSetupForm />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
