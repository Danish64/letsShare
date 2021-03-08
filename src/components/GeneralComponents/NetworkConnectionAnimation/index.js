import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import NetworkErrorAnimation from 'res/animations/GeneralAnimations/NetworkErrorAnimation.json';
import LottieView from 'lottie-react-native';
import {
  SubtitleTextBlack,
  BodyTextBlack,
} from 'res/UniversalComponents/Text.js';
import {mvs, ms} from 'react-native-size-matters';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <LottieView
        source={NetworkErrorAnimation}
        style={{width: '100%'}}
        autoPlay
      />
      <View
        style={{
          width: '100%',
          height: '10%',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: mvs(10, 0.8),
        }}>
        <SubtitleTextBlack>No Internet Connection !</SubtitleTextBlack>
        <BodyTextBlack>We are trying to get you back...</BodyTextBlack>
      </View>
    </View>
  );
};

export default Component;
