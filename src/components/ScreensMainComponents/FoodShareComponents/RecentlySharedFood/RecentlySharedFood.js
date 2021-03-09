import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList/';
import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts


import {
  Food,
  testData} from '../../../../res/constants/dummyData.js';


//Third Party Exports Ends

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}


  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.shareFoodTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>

        <HorizontalFlatList data={Food} navigation={navigation} screen='RecentlySharedFoodScreen'/>

      </View>
    </View>
  );
};

export default Component;
