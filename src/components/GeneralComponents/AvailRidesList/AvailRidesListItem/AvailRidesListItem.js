import React, {useState, useEffect} from 'react';
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
import RidesIcon from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import {useIsFocused} from '@react-navigation/native';

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
  const isFocused = useIsFocused();

  const [fareType, setFareType] = useState(null);
  const getFareMethod = () => {
    if (item.fareMethod == 'chargePerKm') {
      setFareType(' /Km');
    }
    if (item.fareMethod == 'chargePerDP') {
      setFareType('');
    }
  };
  useEffect(() => {
    getFareMethod();
  }, [isFocused]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
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

            {item.fareRate && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + item.fareRate + fareType}
              </TextIcon>
            )}
            {item.fare && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + item.fare}
              </TextIcon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
