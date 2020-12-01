import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms} from 'react-native-size-matters';

export default SearchIcon = () => {
  return <Ionicons name="search" color={Colors.Primary} size={ms(22)} />;
};
