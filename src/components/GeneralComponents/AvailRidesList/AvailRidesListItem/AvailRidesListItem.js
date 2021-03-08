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
} from 'res/UniversalComponents/Text';
import {TextIcon, Icon} from 'res/UniversalComponents/TextIcon.js';

const Component = ({
  onPress,
  image,
  rideName,
  registrationNo,
  fare,
  seatsAvailable,
  startLocation,
  destinationLocation,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.rideDetails}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image}></Image>
          </View>

          {rideName && <CaptionTextPrimary>{rideName}</CaptionTextPrimary>}
          {registrationNo && <CaptionText>{registrationNo}</CaptionText>}
        </View>
        <View style={styles.locationDetails}>
          {startLocation && (
            <CaptionText>{startLocation.data.description}</CaptionText>
          )}

          {/* <View style={styles.verticalSeparator} /> */}

          <Icon flexDirection="column" iconName={'pin-outline'}></Icon>
          {destinationLocation && (
            <CaptionText>{destinationLocation.data.description}</CaptionText>
          )}
        </View>
        <View style={styles.otherDetail}>
          {seatsAvailable && (
            <TextIcon flexDirection="column" iconName={'people-outline'}>
              {seatsAvailable}
            </TextIcon>
          )}

          <View style={styles.horizontalSeparator} />

          {fare && (
            <TextIcon flexDirection="column" iconName={'cash-outline'}>
              {fare}
            </TextIcon>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
