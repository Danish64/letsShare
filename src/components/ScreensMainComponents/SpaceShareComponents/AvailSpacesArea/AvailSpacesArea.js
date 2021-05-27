import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import {
  HeadingText,
  ShareActionAreaHeadingText,
} from 'res/UniversalComponents/Text.js';
import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
import styles from './style';
import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

const Component = ({navigation}) => {
  return (
    <View style={styles.availSpacesComponentArea}>
      <View style={styles.availSpaceTitleText}>
        <ShareActionAreaHeadingText>Avail Space</ShareActionAreaHeadingText>
      </View>
      <View style={styles.myAvailedSpacesButtonView}>
        <OutlinedActionIconButton
          iconName="eye"
          onPress={() => navigation.navigate('AvailedSpaces')}>
          My Availed Spaces
        </OutlinedActionIconButton>
      </View>
      <View style={styles.categoriesArea}>
        <TextImageContainer
          text=" Avail Residence Space"
          onPress={() => navigation.navigate('AvailResidenceSpace')}
        />
        <TextImageContainer
          text="Avail Working Space"
          onPress={() => navigation.navigate('AvailWorkingSpace')}
        />
        <TextImageContainer
          text="Avail Event Space"
          onPress={() => navigation.navigate('AvailEventSpace')}
        />
        <TextImageContainer
          text="Avail Parking Space"
          onPress={() => navigation.navigate('AvailParkingSpace')}
        />
        <TextImageContainer
          text="Avail Storage Space"
          onPress={() => navigation.navigate('AvailStorageSpace')}
        />
      </View>
    </View>
  );
};

export default Component;
