import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import TextTemplate from './TextTemplates';
import ButtonsTemplate from './Buttons';
import Logo from 'res/images/Logos/LogoPrimary.png';
import SplashScreen from '../SplashScreen';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports End

const Component = () => {
  return (
    <Container>
      <View
        style={{
          width: '100%',
          height: '5%',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
        }}>
        <Image
          style={{width: '60%', height: '100%', resizeMode: 'contain'}}
          source={Logo}
        />
      </View>

      {/* <TextTemplate /> */}
      <ButtonsTemplate />
    </Container>
    // <SplashScreen />
  );
};

export default Component;
