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
import {Colors} from 'res/constants/Colors.js';

const Component = ({
  item,
  startLocation,
  destinationLocation,
  rideCategory,
  onPress,
  image,
  rideName,
  registrationNo,
  fare,
  seatsAvailable,
}) => {
  return (
    <TouchableOpacity key={item.key} onPress={onPress}>
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {rideCategory && (
            <View style={{width: '80%', alignItems: 'center'}}>
              <RecentlySharedTitleText>
                {rideCategory + ' Ride'}
              </RecentlySharedTitleText>
            </View>
          )}
          {item.bookings.length === 0 ? (
            <View />
          ) : (
            <View
              style={{
                width: '5%',
                height: 15,
                // backgroundColor: 'blue',
                borderRadius: 30,
                backgroundColor: Colors.Primary,
              }}
            />
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.rideDetails}>
            <View style={styles.imageContainer}>
              <Image source={RidesIcon} style={styles.image} />
            </View>

            {rideName && <CaptionTextPrimary>{rideName}</CaptionTextPrimary>}

            {registrationNo && <CaptionText>{registrationNo}</CaptionText>}
          </View>
          <View style={styles.locationDetails}>
            {startLocation && (
              <CaptionText>{startLocation.address}</CaptionText>
            )}

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
