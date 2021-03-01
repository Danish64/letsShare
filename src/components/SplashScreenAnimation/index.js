import React, {useEffect, useState} from 'react';
import {View, StatusBar, Text} from 'react-native';
import SplashScreenLogoAnimation from 'res/animations/SplashScreenLogo.json';
import LottieView from 'lottie-react-native';
import styles from 'res/styles/index.styles.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#FFFFFF');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!Loading) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Authentication'}],
      });
    }
  }, [Loading]);

  return (
    <View style={styles.splashScreenStyle}>
      <LottieView
        source={SplashScreenLogoAnimation}
        style={{width: '50%'}}
        autoPlay
      />
    </View>
  );
};

export default Component;
