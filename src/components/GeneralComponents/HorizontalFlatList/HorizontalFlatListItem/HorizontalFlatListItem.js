import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';
import DummyImage from 'res/images/DummyImages/testImage.jpg';
import {
  ChargesIcon,
  SeatsLeftIcon,
  RouteIcon,
} from 'res/UniversalComponents/TextIcon.js';
import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({item}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareItemContainer}>
      <Image
        resizeMode="cover"
        style={styles.imageContainer}
        source={DummyImage}
      />
      <View style={styles.descriptionStyle}>
        <View style={styles.titleContainer}>
          <RecentlySharedTitleText numberOfLines={1}>
            Ride Type
          </RecentlySharedTitleText>
        </View>
        <ChargesIcon>100/-Rs</ChargesIcon>
        <SeatsLeftIcon>2</SeatsLeftIcon>
        <RouteIcon numberOfLines={1}>
          KRL road, Rawalpindi - E11, Islamabad
        </RouteIcon>
      </View>
    </View>
  );
};

export default Component;
