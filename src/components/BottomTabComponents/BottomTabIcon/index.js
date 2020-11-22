import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters';
import {
  ACTIVE_COLOR,
  DEFAULT_BOTTOM_TAB_ICON_SIZE,
  DEFAULT_BOTTOM_TAB_ICON_SCALE_FACTOR,
} from 'res/constants/constants.js';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const iconSize = ms(
  DEFAULT_BOTTOM_TAB_ICON_SIZE,
  DEFAULT_BOTTOM_TAB_ICON_SCALE_FACTOR,
);

const Component = ({name, focused, color}) => {
  return (
    <Ionicons
      name={name}
      color={focused ? ACTIVE_COLOR : color}
      size={iconSize}
    />
  );
};

export default Component;
