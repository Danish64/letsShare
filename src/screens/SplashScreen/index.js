import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import SplashScreenAnimator from '../../components/SplashScreenAnimation';
//Native Exports Ends Here

const Component = ({navigation}) => {
  return (
    <Container>
      <SplashScreenAnimator navigation={navigation} />
    </Container>
  );
};

export default Component;
