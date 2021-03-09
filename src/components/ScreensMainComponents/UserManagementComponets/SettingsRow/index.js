import React from 'react';
import {BodyTextBlack, BodyText} from 'res/UniversalComponents/Text.js';
import {View} from 'react-native';
import {mvs, ms} from 'react-native-size-matters';

const Component = ({itemName, itemValue}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: mvs(8, 0.8),
      }}>
      <View
        style={{
          width: '90%',
          backgroundColor: '#fafafa',
          paddingHorizontal: ms(10, 0.8),
          paddingVertical: ms(6, 0.8),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <BodyText>{itemName}</BodyText>
        <BodyTextBlack>{itemValue}</BodyTextBlack>
      </View>
    </View>
  );
};

export default Component;
