import React from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList/';
import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';

//Native Exports Ends Here

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  const data = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
  ];
  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.shareRideTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList data={data} />
      </View>
    </View>
  );
};

export default Component;
