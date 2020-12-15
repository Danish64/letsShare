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

export const ChargesIcon = (props) => (
  <View style={styles.chargesIcon}>
    <Ionicons name={'cash-outline'} color={Colors.Black} size={18} />
    <RecentlySharedSubtitleText>{props.children}</RecentlySharedSubtitleText>
  </View>
);

export const SeatsLeftIcon = (props) => (
  <View style={styles.seatsLeft}>
    <Ionicons name={'people-outline'} color={Colors.Black} size={18} />
    <RecentlySharedSubtitleText>{props.children}</RecentlySharedSubtitleText>
  </View>
);

export const RouteIcon = (props) => (
  <View style={styles.routeDetail}>
    <Ionicons name={'navigate-outline'} color={Colors.Black} size={18} />
    <RecentlySharedSubtitleText>{props.children}</RecentlySharedSubtitleText>
  </View>
);
