import React from 'react';
import AddGoodsFormArea from '../../../../ScreensMainComponents/GoodsShareComponents/AddGoodsFormArea';
import {ScrollView, View, Text} from 'react-native';
import styles from 'res/styles/index.styles.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <AddGoodsFormArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
