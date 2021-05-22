import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './style';
import {
  CaptionText,
  CaptionTextPrimary,
  CaptionTextRed,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text';
import {TextIcon, Icon} from 'res/UniversalComponents/TextIcon.js';
import RidesIcon from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useIsFocused} from '@react-navigation/native';

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
  renderRightAction,
}) => {
  const isFocused = useIsFocused();

  const [fareType, setFareType] = useState(null);
  const getFareMethod = () => {
    if (item.fareMethod === 'chargePerKm') {
      setFareType(' /Km');
    }
    if (item.fareMethod === 'chargePerHour') {
      setFareType(' /hour');
    }
    if (item.fareMethod === 'chargePerDP') {
      setFareType('');
    }
  };
  useEffect(() => {
    getFareMethod();
  }, [isFocused]);
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          {rideCategory && (
            <View style={styles.rideCategoryView}>
              <RecentlySharedTitleText>{rideCategory}</RecentlySharedTitleText>
            </View>
          )}
          {item.isAccepted === true ? (
            <View style={styles.circlePrimary} />
          ) : (
            <View style={styles.circleRed} />
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.rideDetails}>
            <View style={styles.imageContainer}>
              <Image source={RidesIcon} style={styles.image} />
            </View>
            <View style={styles.alignCenter}>
              {rideName && <CaptionTextPrimary>{rideName}</CaptionTextPrimary>}
            </View>
            <View style={styles.alignCenter}>
              {registrationNo && <CaptionText>{registrationNo}</CaptionText>}
            </View>
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
                {'Rs ' + fare + fareType}
              </TextIcon>
            )}
          </View>
        </View>
        <View style={styles.horizontalSeparator} />
        {item.isAccepted === true ? (
          <View style={styles.statusDetail}>
            <View style={styles.acceptedRequestsView}>
              <RecentlySharedSubtitleText>
                Request Status
              </RecentlySharedSubtitleText>
              <View style={styles.acceptedStatusView}>
                <CaptionTextPrimary>Accepted</CaptionTextPrimary>
              </View>
            </View>
            <View style={styles.contactView}>
              <TouchableOpacity
                onPress={() => console.log('Call Button Pressed')}>
                <Ionicons name="call" size={30} color={Colors.Primary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('Chat Button Pressed')}>
                <Ionicons name="chatbox" size={30} color={Colors.Primary} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.statusDetail}>
            <View style={styles.pendingRequestsView}>
              <RecentlySharedSubtitleText>
                Request Status
              </RecentlySharedSubtitleText>
              <View style={styles.notAcceptedStatusView}>
                <CaptionTextRed>Not Accepted</CaptionTextRed>
              </View>
            </View>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Component;
