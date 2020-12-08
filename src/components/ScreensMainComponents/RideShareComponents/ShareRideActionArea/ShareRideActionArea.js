import React from 'react';
import {HeadingText, GroupLabelText, ShareActionAreaHeadingText, TextButton} from 'res/UniversalComponents/Text.js';
import {PrimaryButton,PrimaryIconButton,OutlinedButton } from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, TouchableOpacity, Text} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {

  
  //to use styles -> {styles.propertyName}
  return(
     <View style={styles.shareRideComponentArea}>
      <View style={styles.shareRideTitleText}>
        <ShareActionAreaHeadingText>Wanna Share Ride?</ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareRideButtonView}>
      <PrimaryIconButton > Share Ride</PrimaryIconButton>
      </View>
    </View>  
  );


  
};
  

export default Component;
