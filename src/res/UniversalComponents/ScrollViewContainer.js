import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from 'res/styles/index.styles.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: 20}}>
      {props.children}
    </ScrollView>
  );
};

export default Component;
