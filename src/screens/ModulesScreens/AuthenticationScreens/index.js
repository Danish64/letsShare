import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import AuthenticationHome from '../../../components/ContainersComponent/AuthenticationContainer';

const Component = ({navigation}) => {
  // const navigationEmailHandler = (email) => {
  //   console.log('Checking email in navigation Handler', email);
  //   // navigation.navigate('PasswordScreen', {email: email});
  // };

  return (
    <Container>
      <AuthenticationHome />
    </Container>
  );
};

export default Component;
