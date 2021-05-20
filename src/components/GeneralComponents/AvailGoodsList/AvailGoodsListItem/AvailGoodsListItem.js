import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import {
  SubtitleText,
  CaptionText,
  CaptionTextPrimary,
  FormText,
  BodyTextLight,
  BodyTextBold,
  BodyText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
  SubtitleTextBlack,
} from 'res/UniversalComponents/Text';
import {TextIcon, Icon} from 'res/UniversalComponents/TextIcon.js';
import RidesIcon from '../../../../res/images/ModulesImages/RideSharingImages/ShareRide.png';

const Component = ({
  item,
  onPress,
  image,
  title,
  description,
  price,
  shareType,
  quantity,
  deliveryInfo,
  pickupTime,
  pickupLocation,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}></Image>
        </View>
        <View style={styles.detailsContainer}>
          {title && <SubtitleTextBlack>{title}</SubtitleTextBlack>}
          {/* {rideName && <SubtitleTextBlack>{rideName}</SubtitleTextBlack>} */}
          <View style={styles.subContainer}>
            {description && <Text>{description}</Text>}
            {/* {seatsAvailable && (
              <TextIcon flexDirection="row" iconName={'people-outline'}>
                {seatsAvailable}
              </TextIcon>
            )} */}
            {price && (
              <TextIcon flexDirection="row" iconName={'cash-outline'}>
                {price}
              </TextIcon>
            )}
            {/* {fare && (
              <TextIcon flexDirection="row" iconName={'cash-outline'}>
                {fare}
              </TextIcon>
            )} */}
            {pickupLocation ? (
              <TextIcon flexDirection="row" iconName={'navigate-outline'}>
                {pickupLocation.data.description}
              </TextIcon>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
