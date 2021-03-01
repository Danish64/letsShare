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
    <TextInput
      placeholder={props.placeHolder}
      onChangeText={props.onChangeText}
      value={props.value}></TextInput>
  </View>
);

export const OutlinedBorderTextInput = ({title}) => (
  <View style={styles.outlinedBorderTextInput}>
    <TextInput>
      <Text
        style={{fontSize: 20, color: Colors.LightGrey, textAlign: 'center'}}>
        {title}
      </Text>
    </TextInput>
  </View>
);
export const IconTextInputSquare = ({icon, ...otherProps}) => (
  <View style={styles.iconTextInputField}>
    {icon && (
      <Ionicons
        name={icon}
        size={20}
        color={Colors.MediumGrey}
        style={{marginLeft: 10}}
      />
    )}
    <TextInput style={styles.inputText} {...otherProps} />
  </View>
);

export const FormInputTitleBaseline = ({icon, title, ...otherProps}) => (
  <View style={styles.textInputAreaBaseline}>
    <TextInputTitleText>{title}</TextInputTitleText>
    <TextInput style={styles.inputTextSmall} {...otherProps}></TextInput>
  </View>
);

export const TestField = ({icon, ...otherProps}) => (
  <View style={styles.testField}>
    {icon && (
      <Ionicons
        name={icon}
        size={20}
        color={Colors.MediumGrey}
        style={{marginLeft: 10}}
      />
    )}
    <TextInput style={styles.inputText} {...otherProps} />
  </View>
);
