import React from 'react';
import {ScrollView, View} from 'react-native';

const Component = (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}
      nestedScrollEnabled
      keyboardShouldPersistTaps="always">
      {props.children}
    </ScrollView>
  );
};

export default Component;
