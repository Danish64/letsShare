import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from 'res/styles/index.styles.js';
import NetInfo from '@react-native-community/netinfo';
import NetworkConnectionAnimation from '../../components/GeneralComponents/NetworkConnectionAnimation';
// import from '../../utils/JS U'
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = (props) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {isConnected ? props.children : <NetworkConnectionAnimation />}
    </SafeAreaView>
  );
};

export default Component;
