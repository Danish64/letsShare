import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BodyTextBoldLargeRed} from 'res/UniversalComponents/Text.js';
import {View} from 'react-native';
import {mvs, ms} from 'react-native-size-matters';
import {clearAll} from '../../../../utils/AsyncStorageUtilities';
import {useNavigation} from '@react-navigation/native';

const Component = () => {
  const navigation = useNavigation();
  const logout = () => {
    clearAll();
    setTimeout(() => {
      navigation.navigate('Authentication', {screen: 'UserManagerHome'});
    }, 1500);
  };

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: mvs(8, 0.8),
      }}>
      <TouchableOpacity
        onPress={logout}
        style={{
          width: '100%',
          backgroundColor: '#fafafa',
          paddingHorizontal: ms(10, 0.8),
          paddingVertical: ms(6, 0.8),
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <BodyTextBoldLargeRed>Logout</BodyTextBoldLargeRed>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
