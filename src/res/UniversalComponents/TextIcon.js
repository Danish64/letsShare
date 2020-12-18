import React from 'react';
import styles from 'res/styles/index.styles.js';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList, View, Text, Image} from 'react-native';

import {
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

export const TextIcon = (props) => (
  <View style={styles.textIconStyle}>
    <Ionicons name={props.iconName} color={Colors.Black} size={18} />
    <RecentlySharedSubtitleText>{props.children}</RecentlySharedSubtitleText>
  </View>
);
