import React from 'react';
import {View} from 'react-native';
import {
  PrimaryButton,
  PrimaryButtonDarkGrey,
  PrimaryButtonWhite,
  OutlinedButton,
} from 'res/UniversalComponents/Button.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports End

const Component = () => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'flex-start',
        padding: 5,
      }}>
      {/* <PrimaryButtonWhite>Explore nearby</PrimaryButtonWhite> */}
      {/* <PrimaryButton>Check availability</PrimaryButton> */}
      {/* <PrimaryButtonDarkGrey>Explore Airbnb</PrimaryButtonDarkGrey> */}
      {/* <OutlinedButton>Outline</OutlinedButton> */}
    </View>
  );
};

export default Component;
