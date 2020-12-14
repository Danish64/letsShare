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
     <View style={styles.shareGoodsComponentArea}>
      <View style={styles.shareGoodsTitleText}>
        <ShareActionAreaHeadingText>Wanna Share Goods?</ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareGoodsButtonView}>
      <PrimaryIconButton > Share Goods</PrimaryIconButton>
      </View>
    </View>  
  );


  
};
  

export default Component;
