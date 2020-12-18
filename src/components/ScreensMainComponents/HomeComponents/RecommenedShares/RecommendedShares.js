import React from 'react';
import {View} from 'react-native';
import {SectionHeadingText} from 'res/UniversalComponents/Text.js';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';
import styles from './style';

const Component = () => {
  return (
    <View style={styles.recommendedArea}>
      <View style={styles.recommendedAreaTitleText}>
        <SectionHeadingText>Recommended Shares</SectionHeadingText>
      </View>
      <View style={styles.recommendedFlatlistArea}>
        <HorizontalFlatList />
      </View>
    </View>
  );
};

export default Component;
