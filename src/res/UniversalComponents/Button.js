import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from 'res/styles/index.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ButtonTextBlack,
  ButtonTextWhite,
  TextButton,
} from 'res/UniversalComponents/Text.js';
import {Colors} from 'res/constants/Colors.js';
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
export const CategoryOutlinedButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.categoryButtonOutlined}>
      <ButtonTextBlack>{props.children}</ButtonTextBlack>
      <Ionicons name={props.iconName} color={Colors.Black} size={30} />
    </View>
  </TouchableOpacity>
);

export const PrimaryIconButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonIconPrimary}>
      <Ionicons name={props.iconName} color={Colors.White} size={30} />
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);

export const AddAssetButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.addAssetButton}>
      <View style={styles.addAssetIconArea}>
        <Ionicons name={props.iconName} color={Colors.Black} size={40} />
      </View>
      <View style={styles.addAssetTextArea}>
        <ButtonTextBlack>{props.children}</ButtonTextBlack>
      </View>
    </View>
  </TouchableOpacity>
);
