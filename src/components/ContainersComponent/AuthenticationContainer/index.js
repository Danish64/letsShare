import React from 'react';
import {
  EmailLoginActionArea,
  SocialLoginActionArea,
} from '../../ScreensMainComponents/AuthenticationComponents';
import IllustrationContainer from '../../../components/GeneralComponents/IllustrationContainer';

import Container from 'res/UniversalComponents/Container.js';
import LoginIllustration from 'res/images/ModulesImages/AuthenticationImages/accessAccount.png';
const Component = ({navigationHandler}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <Container>
      <EmailLoginActionArea navigationHandler={navigationHandler} />
      {/* <SocialLoginActionArea /> */}
      <IllustrationContainer illustration={LoginIllustration} />
    </Container>
  );
};

export default Component;
