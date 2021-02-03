import React from 'react';
import styles from 'res/styles/index.styles.js';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TextInput} from 'react-native';
import {
  SectionHeadingText,
  TextInputTitleText,
} from 'res/UniversalComponents/Text.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends
var hasFocus = null;
export const FormTextInput = (props) => (
  <View style={styles.textInputAreaBlur}>
    <TextInputTitleText>{props.title}</TextInputTitleText>
    <TextInput placeholder={props.placeHolder} onChangeText={props.onChangeText} value={props.value}></TextInput>
  </View>
);


