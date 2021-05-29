import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
  Alert,
  alert,
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
import {getDistance, getPreciseDistance} from 'geolib';

const Component = ({
  item,
  startLocation,
  destinationLocation,
  rideCategory,
  onPress,
  image,
  rideName,
  registrationNo,
  ownerContactNumber,
  fare,
  fareRate,
  seatsAvailable,
  renderRightAction,
  fareMethod,
}) => {
  // calculating sharer distance from start to end point
  const [sharerDistance, setSharerDistance] = useState(null);
  const [sharerChargesPerKm, setSharerChargesPerKm] = useState(null);
  const [availerCharges, setAvailerCharges] = useState(null);

  // console.log('Sharer Distance', sharerDistance);
  // console.log('sharerChargesPerKm', sharerChargesPerKm);

  const calculateSharerDistance = () => {
    const sharerStartLat = item.startLocation.latitude;
    const sharerStartLng = item.startLocation.longitude;

    const sharerEndLat = item.destinationLocation.latitude;
    const sharerEndLng = item.destinationLocation.longitude;

    const sharerDist = getPreciseDistance(
      {latitude: sharerStartLat, longitude: sharerStartLng},
      {latitude: sharerEndLat, longitude: sharerEndLng},
    );
    const sharerDistKm = sharerDist / 1000;
    setSharerDistance(sharerDistKm);
    if (rideCategory == 'Nearby') {
      console.log('calculate fare here');
    }
    if (rideCategory == 'CityToCity') {
      const sharerChargesPerKm = fare / sharerDistance;
      setSharerChargesPerKm(sharerChargesPerKm);
    }
  };

  //====================================================
  const isFocused = useIsFocused();

  const [fareType, setFareType] = useState(null);
  const [nearbyAvailerFare, setNearbyAvailerFare] = useState(null);

  const calculateAvailerFare = () => {
    if (rideCategory == 'Nearby' || rideCategory == 'CityToCity') {
      const availerStartLat = item.bookings[0].availerPickUpLocation.latitude;
      const availerStartLng = item.bookings[0].availerPickUpLocation.longitude;

      const availerEndLat = item.bookings[0].availerDropOffLocation.latitude;
      const availerEndLng = item.bookings[0].availerDropOffLocation.longitude;

      const dist = getPreciseDistance(
        {latitude: availerStartLat, longitude: availerStartLng},
        {latitude: availerEndLat, longitude: availerEndLng},
      );

      const availerDistInKm = dist / 1000;
      const availerDistance = availerDistInKm;
      console.log('Availer Distance', availerDistance);
      if (rideCategory == 'Nearby') {
        setAvailerCharges('100');
        console.log('calculate fare here');
      }
      if (rideCategory == 'CityToCity') {
        const availerCharges = Math.floor(availerDistance * sharerChargesPerKm);
        setAvailerCharges(availerCharges);
      }

      // if (fareMethod == 'chargePerKm') {
      //   const fare = distInKm * fareRate;
      //   setNearbyAvailerFare(fare);
      // }
      // if (fareMethod == 'chargePerDP') {
      //   const RatePerKm = fareRate / sharerDistance;
      //   const fare = availerDistance / RatePerKm;
      //   setNearbyAvailerFare(fare);
      // }
    }
  };

  // const getFareMethod = () => {
  //   if (item.fareMethod === 'chargePerKm') {
  //     setFareType(' /Km');
  //   }

  //   if (item.fareMethod === 'chargePerDP') {
  //     setFareType('');
  //   } else {
  //     setFareType('');
  //   }
  // };

  useEffect(() => {
    calculateAvailerFare();
    calculateSharerDistance();
  }, [isFocused]);

  // useEffect(() => {
  //   getFareMethod();
  // }, [isFocused]);

  //=====================================Link Contact Source============
  const linkingContactPlatform = (linkFor) => {
    let msg = 'Hey there? ';
    let phoneWithCountryCode = ownerContactNumber;

    let mobile =
      Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (mobile) {
      if (linkFor == 'WhatsApp') {
        if (msg) {
          let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
          Linking.openURL(url)
            .then((data) => {
              console.log('WhatsApp Opened');
            })
            .catch(() => {
              alert('Make sure WhatsApp installed on your device');
            });
        } else {
          alert('Please insert message to send');
        }
      }
      if (linkFor == 'SMS') {
        const separator = Platform.OS === 'ios' ? '&' : '?';
        let url = `sms:${mobile}${separator}body=${msg}`;
        Linking.openURL(url)
          .then((data) => {
            console.log('Phone Message Opened');
          })
          .catch(() => {
            alert('Failed');
          });
      }
      if (linkFor == 'Call') {
        let url = `tel:${mobile}`;
        Linking.openURL(url)
          .then((data) => {
            console.log('DialPad Opened');
          })
          .catch(() => {
            alert('Failed');
          });
      }
    } else {
      alert('Please insert mobile no');
    }
  };
  //==========================================================

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          {rideCategory && (
            <View style={styles.rideCategoryView}>
              <RecentlySharedTitleText>{rideCategory}</RecentlySharedTitleText>
            </View>
          )}
          {item.bookings[0].isAccepted === true ? (
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
            {rideCategory == 'TourRide' ? null : (
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <>
                  <CaptionTextPrimary>Estimated Fare: </CaptionTextPrimary>
                  <CaptionText>{availerCharges + ' Rs'}</CaptionText>
                </>
              </View>
            )}
          </View>
          <View style={styles.otherDetail}>
            {item.bookings[0].availerSeats && (
              <TextIcon flexDirection="column" iconName={'people-outline'}>
                {item.bookings[0].availerSeats}
              </TextIcon>
            )}

            <View style={styles.horizontalSeparator} />

            {fare && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + fare}
              </TextIcon>
            )}
            {fareRate && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + fareRate + fareType}
              </TextIcon>
            )}
          </View>
        </View>
        <View style={styles.horizontalSeparator} />
        {item.bookings[0].isAccepted === true ? (
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
              <TouchableOpacity onPress={() => linkingContactPlatform('Call')}>
                <Ionicons name="call" size={30} color={Colors.Primary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => linkingContactPlatform('SMS')}>
                <Ionicons name="chatbox" size={30} color={Colors.Primary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => linkingContactPlatform('WhatsApp')}>
                <Ionicons
                  name="logo-whatsapp"
                  size={30}
                  color={Colors.Primary}
                />
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
