import React from 'react';
import styles from 'res/styles/index.styles.js';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList, View, Text, Image} from 'react-native';

import {
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
  IconTextLightGrey,
  IconTextSmallLightGrey,
} from 'res/UniversalComponents/Text.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

export const TextIcon = ({iconName, flexDirection, children, color}) => (
  <View style={[styles.textIconStyle, {flexDirection: flexDirection}]}>
    <View style={styles.textIconAlign}>
      <Ionicons
        name={iconName}
        color={color ? '#006d77' : Colors.LightGrey}
        size={18}
      />
    </View>
    <View style={styles.textIconAlign}>
      <IconTextLightGrey>{children}</IconTextLightGrey>
    </View>
  </View>
);

export const TextIconSmall = ({iconName, flexDirection, children, color}) => (
  <View style={[styles.textIconStyle, {flexDirection: flexDirection}]}>
    <View style={styles.textIconAlign}>
      <Ionicons
        name={iconName}
        color={color ? '#006d77' : Colors.LightGrey}
        size={18}
      />
    </View>
    <View style={styles.textIconAlign}>
      <IconTextSmallLightGrey>{children}</IconTextSmallLightGrey>
    </View>
  </View>
);

export const Icon = ({iconName, flexDirection}) => (
  <View style={[styles.textIconStyle, {flexDirection: flexDirection}]}>
    <View style={styles.textIconAlign}>
      <Ionicons name={iconName} color={Colors.Black} size={18} />
    </View>
  </View>
);
