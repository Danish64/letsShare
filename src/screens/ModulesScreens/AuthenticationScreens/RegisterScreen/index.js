import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import RegisterContainer from '../../../../components/ContainersComponent/AuthenticationContainer/RegisterContainer';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header
        title="Register"
        // isSearchAble
        hasBackIcon
        navigation={navigation}
        //navigateTo="HomeSearchScreen"
      />
      <RegisterContainer navigation={navigation} />
    </Container>
  );
};

export default Component;
