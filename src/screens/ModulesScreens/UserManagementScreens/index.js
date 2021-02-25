import React from 'react';

import Container from 'res/UniversalComponents/Container.js';
import {HeadingText} from 'res/UniversalComponents/Text.js';
import {LandscapeButtonBlack} from 'res/UniversalComponents/Button.js';
import {View} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  return (
    <Container>
      <HeadingText>User Management Screens</HeadingText>
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <LandscapeButtonBlack
          onPress={() => {
            console.log('Logout Button Pressed');
          }}>
          Logout
        </LandscapeButtonBlack>
      </View>
    </Container>
  );
};

export default Component;
