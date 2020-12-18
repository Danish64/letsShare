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
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({item}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareItemContainer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.imageStyle}
          source={DummyImage}
        />
      </View>

      <View style={styles.descriptionStyle}>
        <View style={styles.titleContainer}>
          <RecentlySharedTitleText numberOfLines={1}>
            Ride Type
          </RecentlySharedTitleText>
        </View>
        <TextIcon iconName="cash-outline">100/-Rs</TextIcon>
        <TextIcon iconName="people-outline">2</TextIcon>
        <TextIcon iconName="navigate-outline">
          KRL road, Rawalpindi - E11, Islamabad
        </TextIcon>
      </View>
    </View>
  );
};

export default Component;
