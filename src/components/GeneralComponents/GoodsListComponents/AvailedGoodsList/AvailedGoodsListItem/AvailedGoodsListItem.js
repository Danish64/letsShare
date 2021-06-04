import React from 'react';
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
import ShareGoodsIcon from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useSelector} from 'react-redux';

const Component = ({item, renderRightAction, ownerContactNumber}) => {
  const state = useSelector((state) => state);
  const userId = state.userInformation.user._id;

  const getUserBooking = (bookings, userId) => {
    return bookings.filter((item) => item.availerId == userId)[0];
  };

  let userBooking = getUserBooking(item.bookings, userId);
  console.log('user Booking', userBooking);
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
    <TouchableHighlight>
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
          }}>
          {item.shareType && (
            <View style={{width: '80%', alignItems: 'center', paddingTop: 10}}>
              <RecentlySharedTitleText>
                {item.shareType}
              </RecentlySharedTitleText>
            </View>
          )}
          {userBooking.isAccepted == true ? (
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: Colors.Primary,
              }}
            />
          ) : (
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: Colors.Failure,
              }}
            />
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.foodDetails}>
            <View style={styles.imageContainer}>
              <Image source={ShareGoodsIcon} style={styles.image} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {item.title && (
                <CaptionTextPrimary>{item.title}</CaptionTextPrimary>
              )}
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          </View>
          <View style={styles.locationDetails}>
            {item.description && (
              <>
                <CaptionTextPrimary>Description</CaptionTextPrimary>
                <CaptionText>{item.description}</CaptionText>
              </>
            )}
            <View style={styles.verticalSeparator} />

            {item.pickUpLocation && (
              <>
                <CaptionTextPrimary>Pickup Location</CaptionTextPrimary>
                <CaptionText>{item.pickUpLocation.address}</CaptionText>
              </>
            )}
          </View>
          <View style={styles.otherDetail}>
            {item.listForDays && (
              <TextIcon flexDirection="column" iconName={'today-outline'}>
                {item.listForDays + ' Days'}
              </TextIcon>
            )}

            <View style={styles.horizontalSeparator} />

            {item.pickUpTime && (
              <TextIcon flexDirection="column" iconName={'time'}>
                {item.pickUpTime}
              </TextIcon>
            )}
          </View>
        </View>
        <View style={styles.horizontalSeparator} />

        {userBooking.isAccepted == true ? (
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
                <CaptionTextRed>{userBooking.bookingStatus}</CaptionTextRed>
              </View>
            </View>
          </View>
        )}

        {/* {item.bookings.length !== 0 ? (
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
        )} */}
      </View>
    </TouchableHighlight>
  );
};

export default Component;
