import React, {useState, useRef} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './style';

import {Colors} from 'res/constants/Colors';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.Primary} />
    </View>
  );
};

export default Component;
