import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import PasswordContainer from '../../../../components/ContainersComponent/AuthenticationContainer/PasswordContainer';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header
        //title=""
        // isSearchAble
        hasBackIcon
        navigation={navigation}
        //navigateTo="HomeSearchScreen"
      />
      <PasswordContainer navigation={navigation} />
    </Container>
  );
};

export default Component;
