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
} from 'res/UniversalComponents/Text';
import {TextIcon, Icon} from 'res/UniversalComponents/TextIcon.js';
import RidesIcon from '../../../../res/images/ModulesImages/RideSharingImages/ShareRide.png';
import style from '../../TextImageContainer/style';

const Component = ({
  item,
  onPress,
  image,
  rideName,
  registrationNo,
  rideCategory,
  fare,
  seatsAvailable,
  startLocation,
  destinationLocation,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={style.subContainer}>
          {rideCategory && (
            <View style={styles.rideCategoryView}>
              <RecentlySharedTitleText>{rideCategory}</RecentlySharedTitleText>
            </View>
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.rideDetails}>
            <View style={styles.imageContainer}>
              <Image source={RidesIcon} style={styles.image}></Image>
            </View>

            {rideName && <CaptionTextPrimary>{rideName}</CaptionTextPrimary>}
            {registrationNo && <CaptionText>{registrationNo}</CaptionText>}
          </View>
          <View style={styles.locationDetails}>
            {startLocation && (
              <CaptionText>{startLocation.address}</CaptionText>
            )}

            {/* <View style={styles.verticalSeparator} /> */}

            <Icon flexDirection="column" iconName={'pin-outline'}></Icon>
            {destinationLocation && (
              <CaptionText>{destinationLocation.address}</CaptionText>
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
      </View>
    </TouchableOpacity>
  );
};

export default Component;
