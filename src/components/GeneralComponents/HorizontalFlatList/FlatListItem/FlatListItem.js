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
import {ShareButton} from '../../../../res/UniversalComponents/Button';
import TestCaseImage from 'res/images/ModulesImages/GeneralImages/newEntry.png';
import {colors} from 'react-native-elements';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({
  id,
  title,
  image,
  description,
  price,
  seatsAvailable,
  location,
  pickupLocation,
  rideType,
  fare,
  startLocation,
  destinationLocation,
  onPress,
}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.shareItemContainer}>
        {/* <View style={styles.imageContainer}>
          <Image resizeMode="center" style={styles.imageStyle} source={image} />
        </View> */}
        <View style={styles.subContainer1}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
        </View>

        <View style={styles.descriptionStyle}>
          <View style={styles.titleContainer}>
            {title && (
              <RecentlySharedTitleText numberOfLines={1}>
                {title}
              </RecentlySharedTitleText>
            )}
            {rideType && (
              <RecentlySharedTitleText numberOfLines={1}>
                {rideType}
              </RecentlySharedTitleText>
            )}
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
            {fare && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {fare}Rs
              </TextIcon>
            )}
            {/* {quantity && <TextIcon flexDirection="column">{quantity}</TextIcon>} */}
            {seatsAvailable && (
              <TextIcon flexDirection="column" iconName={'people-outline'}>
                {seatsAvailable}
              </TextIcon>
            )}

            <View style={styles.separator} />
          </View>
          <View style={styles.locationStyle}>
            {destinationLocation && (
              <TextIcon flexDirection="row" iconName={'navigate-outline'}>
                {destinationLocation.data.description}
              </TextIcon>
            )}
            {pickupLocation && (
              <TextIcon flexDirection="row" iconName={'navigate-outline'}>
                {pickupLocation.data.description}
              </TextIcon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
