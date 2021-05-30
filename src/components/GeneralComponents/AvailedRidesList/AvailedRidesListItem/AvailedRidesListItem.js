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
import {
  TextIcon,
  Icon,
  TextIconSmall,
} from 'res/UniversalComponents/TextIcon.js';
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
  const isFocused = useIsFocused();
  const [fareType, setFareType] = useState(null);

  // calculating sharer distance from start to end point
  const [sharerDistance, setSharerDistance] = useState(null);
  const [sharerChargesPerKm, setSharerChargesPerKm] = useState(null);
  const [availerCharges, setAvailerCharges] = useState(null);
  const [nearbyAvailerFare, setNearbyAvailerFare] = useState(null);

  console.log('Sharer Distance', sharerDistance);
  console.log('sharerChargesPerKm', sharerChargesPerKm);

  const getFareMethod = () => {
    if (fareMethod == 'chargePerKm') {
      setFareType(' /Km');
    } else {
      setFareType('');
    }
  };

  useEffect(() => {
    calculateAvailerFare();
    calculateSharerDistance();
    getFareMethod();
  }, [isFocused, sharerChargesPerKm]);

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
      if (fareMethod == 'chargePerKm') {
        const sharerPerKm = fareRate;
        setSharerChargesPerKm(sharerPerKm);
      }
      if (fareMethod == 'chargePerDP') {
        const sharerPerKm = Math.floor(fareRate / sharerDistKm);
        setSharerChargesPerKm(sharerPerKm);
      }
    }
    if (rideCategory == 'CityToCity') {
      const sharerChargesPerKm = fare / sharerDistance;
      setSharerChargesPerKm(sharerChargesPerKm);
    }
  };

  //====================================================

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
        if (fareMethod == 'chargePerKm') {
          const fare = Math.floor(availerDistance * item.fareRate);
          setNearbyAvailerFare(fare);
        }
        if (fareMethod == 'chargePerDP') {
          const fare = Math.floor(availerDistance * sharerChargesPerKm);
          setNearbyAvailerFare(fare);
        }
      }

      if (rideCategory == 'CityToCity') {
        const availerCharges = Math.floor(availerDistance * sharerChargesPerKm);
        setAvailerCharges(availerCharges);
      }
    }
  };

  //=====================================Link Contact Source============
  const linkingContactPlatform = (linkFor) => {
    let msg = 'From Lets Share: Are You Available? ';
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
            {rideCategory == 'Nearby' && (
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <>
                  <CaptionTextPrimary>Estimated Fare: </CaptionTextPrimary>
                  <CaptionText>{nearbyAvailerFare + ' Rs'}</CaptionText>
                </>
              </View>
            )}
            {rideCategory == 'CityToCity' && (
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <>
                  <CaptionTextPrimary>Estimated Fare: </CaptionTextPrimary>
                  <CaptionText>{availerCharges + ' Rs'}</CaptionText>
                </>
              </View>
            )}
            {/* {rideCategory == 'TourRide' ? null : (
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <>
                  <CaptionTextPrimary>Estimated Fare: </CaptionTextPrimary>
                  <CaptionText>{availerCharges + ' Rs'}</CaptionText>
                </>
              </View>
            )} */}
          </View>
          <View style={styles.otherDetail}>
            {item.bookings[0].availerSeats && (
              <TextIcon flexDirection="column" iconName={'people-outline'}>
                {item.bookings[0].availerSeats}
              </TextIcon>
            )}

            <View style={styles.horizontalSeparator} />

            {rideCategory == 'CityToCity' && (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + fare}
              </TextIconSmall>
            )}
            {fareRate && (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + fareRate + fareType}
              </TextIconSmall>
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
