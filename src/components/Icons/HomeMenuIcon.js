import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters';
import {Colors} from 'res/constants/Colors.js';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const iconSize = ms(48, 0.6);

const Component = ({name, color}) => {
  return (
    <Ionicons
      name={name}
      color={color ? color : Colors.Black}
      size={iconSize}
    />
  );
};

export default Component;
