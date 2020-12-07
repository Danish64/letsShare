import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';
import DummyImage from 'res/images/DummyImages/testImage.jpg';
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
      <View>
        <RecentlySharedTitleText numberOfLines={1}>
          Ride Type
        </RecentlySharedTitleText>
      </View>
      <View>
        <RecentlySharedSubtitleText>
          Route Description
        </RecentlySharedSubtitleText>
      </View>
    </View>
  );
};

export default Component;
