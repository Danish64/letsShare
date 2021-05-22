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
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserIcon from '../../../../res/images/ModulesImages/GeneralImages/user.png';
import {Colors} from 'res/constants/Colors.js';
import {
  PrimaryButton,
  PrimaryButtonDarkGrey,
} from '../../../../res/UniversalComponents/Button';
import {useSelector} from 'react-redux';
import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
  doPutAws,
} from '../../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';

const Component = ({item, onPress, rideCategory, shareId}) => {
  const [status, setStatus] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused;
  }, [status]);

  const state = useSelector((state) => state);

  const AcceptRequest = (rideCategory) => {
    if (rideCategory === 'Nearby') {
      AcceptNearbyRideRequest();
    }
    if (rideCategory === 'CityToCity') {
      AcceptCityToCityRideRequest();
    }
    if (rideCategory === 'TourRide') {
      AcceptTourRideRequest();
    }
  };

  const AcceptNearbyRideRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/nearByRideShares/acceptNearByRidesSharesBooking',
    );
    setStatus(result.status);

    console.log('Accept Availer Request API Call Result', result.data);
  };

  const AcceptCityToCityRideRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/cityToCityRideShares/acceptCityToCityRideSharesBooking',
    );
    setStatus(result.status);

    console.log('Accept Availer Request API Call Result', result.data);
  };

  const AcceptTourRideRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/tourRideShares/acceptTourRideSharesBooking',
    );
    setStatus(result.status);

    console.log('Accept Availer Request API Call Result', result.data);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.rideDetails}>
          <View style={styles.imageContainer}>
            <Image source={UserIcon} style={styles.image} />
          </View>

          {item.availerName && (
            <CaptionTextPrimary>{item.availerName}</CaptionTextPrimary>
          )}
        </View>
        <View style={styles.locationDetails}>
          {item.availerPickUpLocation && (
            <>
              <CaptionTextPrimary>Pickup Location</CaptionTextPrimary>
              <CaptionText>{item.availerPickUpLocation.address}</CaptionText>
            </>
          )}
          {item.availerDropOffLocation && (
            <Icon flexDirection="column" iconName={'pin-outline'}></Icon>
          )}

          {item.availerDropOffLocation && (
            <>
              <CaptionTextPrimary>DropOff Location</CaptionTextPrimary>
              <CaptionText>{item.availerDropOffLocation.address}</CaptionText>
            </>
          )}
        </View>
        <View style={styles.otherDetail}>
          {item.isAccepted === true || status == '200' ? (
            <View
              style={{
                width: '20%',
                height: 15,
                borderRadius: 35,
                backgroundColor: Colors.Primary,
              }}
            />
          ) : (
            <View
              style={{
                width: '20%',
                height: 15,
                borderRadius: 30,
                backgroundColor: Colors.Failure,
              }}
            />
          )}
          <View style={styles.horizontalSeparator} />

          {item.availerSeats && (
            <TextIcon flexDirection="column" iconName={'people-outline'}>
              {item.availerSeats}
            </TextIcon>
          )}
        </View>
      </View>
      <View style={styles.ContactContainer}>
        <View style={styles.acceptButton}>
          {item.isAccepted === true || status == '200' ? (
            <PrimaryButtonDarkGrey>Accepted</PrimaryButtonDarkGrey>
          ) : (
            <PrimaryButton onPress={() => AcceptRequest(rideCategory)}>
              Accept
            </PrimaryButton>
          )}
        </View>
        <View style={styles.callButton}>
          <TouchableOpacity
            onPress={() => {
              console.log('call Button Pressed');
            }}>
            <Ionicons
              name="call"
              color={
                item.isAccepted || status == '200'
                  ? Colors.Primary
                  : Colors.LightGrey
              }
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.chatButton}>
          <TouchableOpacity
            onPress={() => {
              console.log('chat Button Pressed');
            }}>
            <Ionicons
              name="chatbox"
              color={
                item.isAccepted || status == '200'
                  ? Colors.Primary
                  : Colors.LightGrey
              }
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
