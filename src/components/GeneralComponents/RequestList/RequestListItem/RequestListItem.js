import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  Linking,
  Alert,
  alert,
} from 'react-native';
import styles from './style';
import {
  SubtitleText,
  CaptionText,
  CaptionTextPrimary,
  CaptionTextRed,
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
import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
  doPutAws,
} from '../../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';
import {getDistance, getPreciseDistance} from 'geolib';
import {useDispatch} from 'react-redux';

import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import UserActivityClass from '../../../../utils/UserActivity';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({
  item,
  onPress,
  rideCategory,
  shareId,
  sharerFare,
  fareRate,
  fareMethod,
  sharerDistance,
  availerPhoneNumber,
}) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [status, setStatus] = useState(null);
  const [rejectStatus, setRejectStatus] = useState(null);

  useEffect(() => {
    isFocused;
  }, [status]);

  const state = useSelector((state) => state);
  const user = state.userInformation.user;

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

  const rejectRequest = (rideCategory) => {
    if (rideCategory === 'Nearby') {
      rejectNearbyRideRequest();
    }
    if (rideCategory === 'CityToCity') {
      rejectCityToCityRideRequest();
    }
    if (rideCategory === 'TourRide') {
      rejectTourRideRequest();
    }
  };

  // Accept Nearby Ride Booking Request

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

  // Reject Nearby Ride Booking Request

  const rejectNearbyRideRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/nearByRideShares/rejectNearByRidesSharesBooking',
    );
    setRejectStatus(result.status);

    console.log(
      'Reject naerby ride booking Request API Call Result',
      result.data,
    );
    navigation.navigate('SharedRidesScreen');
  };

  // accept city to cit ride booking request

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

  // reject city to city ride booking request

  const rejectCityToCityRideRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/cityToCityRideShares/rejectCityToCityRideSharesBooking',
    );
    setRejectStatus(result.status);

    console.log(
      'Reject city to city ride booking Request API Call Result',
      result.data,
    );
    navigation.navigate('SharedRidesScreen');
  };

  // accept tour ride booking request

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

  // reject tour booking ride request
  const rejectTourRideRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/tourRideShares/rejectTourRideSharesBooking',
    );
    setRejectStatus(result.status);

    console.log(
      'Reject tour ride booking Request API Call Result',
      result.data,
    );
    navigation.navigate('SharedRidesScreen');
  };

  //=====================================Link Contact Source============
  const linkingContactPlatform = (linkFor) => {
    let msg = 'From Lets Share: Are You Available? ';
    let phoneWithCountryCode = availerPhoneNumber;

    let mobile =
      Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (mobile) {
      if (linkFor == 'WhatsApp') {
        let UserActivity = new UserActivityClass();

        UserActivity.mixpanel.identify(user.email);
        const eventInfo = {
          onScreen: 'Ride Booking',
          toScreen: 'WhatsApp opened',
          email: user.email,
        };
        UserActivity.mixpanel.track('Contact WhatsApp', eventInfo);
        UserActivity.mixpanel.flush();
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
    <View key={item._id} style={styles.mainContainer}>
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

      {/* new code for reject option  */}

      <View style={styles.respondRequest}>
        {status == '200' ? null : item.bookingStatus == 'Pending' ? (
          <>
            <PrimaryButton onPress={() => AcceptRequest(rideCategory)}>
              Accept
            </PrimaryButton>
            <PrimaryButton onPress={() => rejectRequest(rideCategory)}>
              Reject
            </PrimaryButton>
          </>
        ) : null}
        {item.bookingStatus == 'Accepted' || status == '200' ? (
          <View style={styles.bookingStatus}>
            <CaptionTextPrimary>Accepted</CaptionTextPrimary>
          </View>
        ) : null}
        {item.bookingStatus == 'Rejected' && (
          <View style={styles.bookingStatus}>
            <CaptionTextRed>Rejected</CaptionTextRed>
          </View>
        )}
      </View>

      <View style={styles.ContactContainer}>
        {item.isAccepted == true || status == '200' ? (
          <View style={styles.contactIconsViewRow}>
            <TouchableOpacity onPress={() => linkingContactPlatform('Call')}>
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

            <TouchableOpacity onPress={() => linkingContactPlatform('SMS')}>
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
            <TouchableOpacity
              onPress={() => linkingContactPlatform('WhatsApp')}>
              <Ionicons
                name="logo-whatsapp"
                color={
                  item.isAccepted || status == '200'
                    ? Colors.Primary
                    : Colors.LightGrey
                }
                size={30}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {/* new code for reject option ends here */}

      {/* previous code starts here */}

      {/* <View style={styles.ContactContainer}>
        <View style={styles.acceptButton}>
          {item.isAccepted === true || status == '200' ? (
            <PrimaryButtonDarkGrey>Accepted</PrimaryButtonDarkGrey>
          ) : (
            <PrimaryButton onPress={() => AcceptRequest(rideCategory)}>
              Accept
            </PrimaryButton>
          )}
        </View>
        <View style={styles.contactIconsView}>
          <TouchableOpacity onPress={() => linkingContactPlatform('Call')}>
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

          <TouchableOpacity onPress={() => linkingContactPlatform('SMS')}>
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

          <TouchableOpacity onPress={() => linkingContactPlatform('WhatsApp')}>
            <Ionicons
              name="logo-whatsapp"
              color={
                item.isAccepted || status == '200'
                  ? Colors.Primary
                  : Colors.LightGrey
              }
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View> */}
      {/* previous code ends here */}
    </View>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStatesToProps, mapDispatchToProps)(Component);
