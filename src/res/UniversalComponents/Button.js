import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from 'res/styles/index.styles.js';
import {
  ButtonTextBlack,
  ButtonTextWhite,
  TextButton,
} from 'res/UniversalComponents/Text.js';
export const PrimaryButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonPrimary}>
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);
export const PrimaryButtonWhite = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonPrimaryWhite}>
      <ButtonTextBlack>{props.children}</ButtonTextBlack>
    </View>
  </TouchableOpacity>
);
export const PrimaryButtonDarkGrey = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonPrimaryDarkGrey}>
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);

export const OutlinedButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonOutlined}>
      <TextButton>{props.children}</TextButton>
    </View>
  </TouchableOpacity>
);
