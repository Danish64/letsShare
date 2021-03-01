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
  price,
  priceIcon,
  quantity,
  quantityIcon,
  location,
  locationIcon,
<<<<<<< HEAD
}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity>
=======
  onPress
}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity
      onPress={onPress}
      >
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
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
<<<<<<< HEAD
          <View style={styles.subtitleContainer}>
=======
          {/* <View style={styles.subtitleContainer}>
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
            <View style={styles.separator} />
            {price && (
              <TextIcon flexDirection="column" iconName={priceIcon}>
                {price}
              </TextIcon>
            )}

            {quantity && (
<<<<<<< HEAD
              <TextIcon flexDirection="column" iconName={quantityIcon}>
=======
              <TextIcon flexDirection="column" iconName="people-outline">
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
                {quantity}
              </TextIcon>
            )}
            <View style={styles.separator} />
<<<<<<< HEAD
          </View>
          <View style={styles.locationStyle}>
            {location && (
              <TextIcon flexDirection="row" iconName={locationIcon}>
=======
          </View> */}
          <View style={styles.locationStyle}>
            {location && (
              <TextIcon flexDirection="row" iconName="navigate-outline">
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
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
