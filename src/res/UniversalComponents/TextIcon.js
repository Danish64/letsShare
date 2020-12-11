import React from 'react';
import styles from 'res/styles/index.styles.js';
import {FlatList, View, Text, Image} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import {
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

export const ChargesIcon = (props) => (
  <View style={styles.chargesIcon}>
    <FontAwesome icon={SolidIcons.money} color="black" size={20} />
    <RecentlySharedTitleText>{props.children}</RecentlySharedTitleText>
  </View>
);
