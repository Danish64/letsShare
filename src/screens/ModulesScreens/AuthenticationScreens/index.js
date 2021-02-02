import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../components/GeneralComponents/Header';
import AuthenticationHome from '../../../components/ContainersComponent/AuthenticationContainer';

const Component = ({navigation}) => {
  return (
    <Container>
      {/* <Header
        title="Login or sign up"
        isSearchAble
        navigation={navigation}
        //navigateTo="HomeSearchScreen"
      /> */}
      <AuthenticationHome navigation={navigation} />
    </Container>
  );
};

export default Component;
