import React from 'react';
import {View, Image} from 'react-native';
import TextTemplate from './TextTemplates';
import Logo from 'res/images/Logos/LogoPrimary.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports End

const Component = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        padding: 5,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '100%',
          height: '5%',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
        }}>
        <Image
          style={{width: '60%', height: '100%', resizeMode: 'contain'}}
          source={Logo}
        />
      </View>
      <TextTemplate />
    </View>
  );
};

export default Component;
