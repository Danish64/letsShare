import React from 'react';
import {
  EmailLoginActionArea,
  SocialLoginActionArea,
} from '../../ScreensMainComponents/AuthenticationComponents';
import IllustrationContainer from '../../../components/GeneralComponents/IllustrationContainer';

import Container from 'res/UniversalComponents/Container.js';
import LoginIllustration from 'res/images/ModulesImages/AuthenticationImages/emailFetch.png';
const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <Container>
      <EmailLoginActionArea navigation={navigation} />
      <SocialLoginActionArea navigation={navigation} />
      {/* <IllustrationContainer illustration={LoginIllustration} /> */}
    </Container>
  );
};

export default Component;
