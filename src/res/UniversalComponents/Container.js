import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from 'res/styles/index.styles.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = (props) => {
  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {props.children}
    </SafeAreaView>
  );
};

export default Component;
