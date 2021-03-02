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

const Component = ({
  id,
  title,
  image,
  description,
  price,
  seats,
  quantity,
  location,
}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity>
      <View style={styles.shareItemContainer}>
        <View style={styles.imageContainer}>
          <Image resizeMode="center" style={styles.imageStyle} source={image} />
        </View>

        <View style={styles.descriptionStyle}>
          <View style={styles.titleContainer}>
            <RecentlySharedTitleText numberOfLines={1}>
              {title}
            </RecentlySharedTitleText>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.separator} />
            {description && (
              <TextIcon flexDirection="row" iconName={'list-outline'}>
                {description}
              </TextIcon>
            )}
            {price && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {price}
              </TextIcon>
            )}
            {/* {quantity && <TextIcon flexDirection="column">{quantity}</TextIcon>} */}
            {seats && (
              <TextIcon flexDirection="column" iconName={'people-outline'}>
                {seats}
              </TextIcon>
            )}

            <View style={styles.separator} />
          </View>
          <View style={styles.locationStyle}>
            {location && (
              <TextIcon flexDirection="row" iconName={'navigate-outline'}>
                {location}
              </TextIcon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
