import React from 'react';
import {
  HeadingText,
  GroupLabelText,
  ShareActionAreaHeadingText,
  TextButton,
} from 'res/UniversalComponents/Text.js';
import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import image from 'res/images/DummyImages/shareRide.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  return (
    <View style={styles.shareSpaceComponentArea}>
      <View style={styles.shareSpaceTitleText}>
        <ShareActionAreaHeadingText>
          Got a event idea ?
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareSpaceButtonView}>
        <OutlinedActionIconButton
          onPress={() => navigation.navigate('CreateEvent')}
          iconName="add-outline">
          Create Event
        </OutlinedActionIconButton>
      </View>
    </View>
  );
};

export default Component;
