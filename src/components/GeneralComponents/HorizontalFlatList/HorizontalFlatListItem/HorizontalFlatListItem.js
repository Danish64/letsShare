import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';
import DummyImage from 'res/images/DummyImages/testImage.jpg';
import {ChargesIcon} from 'res/UniversalComponents/TextIcon.js';
import styles from './style';
import style from './style';
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

          <ChargesIcon>PKR./</ChargesIcon>
        </View>
        <View>
          <RecentlySharedSubtitleText>
            Route Description
          </RecentlySharedSubtitleText>
        </View>

        <View>
          <RecentlySharedSubtitleText>Seats Left:</RecentlySharedSubtitleText>
        </View>
      </View>
    </View>
  );
};

export default Component;
