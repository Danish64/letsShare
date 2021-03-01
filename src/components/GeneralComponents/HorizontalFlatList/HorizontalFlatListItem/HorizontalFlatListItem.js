import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';
import DummyImage from 'res/images/DummyImages/testImage.jpg';
import {TextIcon} from 'res/UniversalComponents/TextIcon.js';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TestCaseImage from 'res/images/ModulesImages/GeneralImages/newEntry.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({item}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity>
      <View style={styles.shareItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.imageStyle}
            source={TestCaseImage}
          />
        </View>

        <View style={styles.descriptionStyle}>
          <View style={styles.titleContainer}>
            <RecentlySharedTitleText numberOfLines={1}>
              Share Type
            </RecentlySharedTitleText>
          </View>
          <TextIcon iconName="cash-outline">100/-Rs</TextIcon>
          <TextIcon iconName="people-outline">2</TextIcon>
          <TextIcon iconName="navigate-outline">
            KRL road, Rawalpindi - E11, Islamabad
          </TextIcon>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
