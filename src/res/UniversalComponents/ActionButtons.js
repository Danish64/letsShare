import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styles from 'res/styles/index.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ButtonTextBlack,
  ButtonTextWhite,
  ButtonTextLightGrey,
  TextButton,
} from 'res/UniversalComponents/Text.js';
import {Colors} from 'res/constants/Colors.js';
import WhiteDotsLoader from 'res/animations/Loaders/whiteDotsLoader.json';
import LottieView from 'lottie-react-native';
import {ms, mvs} from 'react-native-size-matters';
export const ActionButtonBlack = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonLandscapeBlack}>
      {props.loading ? (
        <View
          style={{
            width: ms(300, 0.8),
            height: mvs(20, 0.8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={WhiteDotsLoader}
            style={{width: ms(120, 0.8)}}
            autoPlay
          />
        </View>
      ) : (
        <ButtonTextWhite>{props.children}</ButtonTextWhite>
      )}
    </View>
  </TouchableOpacity>
);
