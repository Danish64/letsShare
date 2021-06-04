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
import UserIcon from 'res/images/ModulesImages/GeneralImages/user.png';
import {Colors} from 'res/constants/Colors.js';
import {
  PrimaryButton,
  PrimaryButtonDarkGrey,
} from 'res/UniversalComponents/Button';
import {useSelector} from 'react-redux';
import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
  doPutAws,
} from '../../../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({
  item,
  onPress,
  foodShareType,
  shareId,
  availerPhoneNumber,
}) => {
  const [status, setStatus] = useState('');
  const [rejectStatus, setRejectStatus] = useState('');

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    isFocused;
  }, [status]);

  const state = useSelector((state) => state);

  const AcceptRequest = (shareType) => {
    if (shareType === 'donate') {
      AcceptDonateRequest();
    }
    if (shareType === 'sell') {
      AcceptSellRequest();
    }
  };

  const rejectRequest = (shareType) => {
    if (shareType === 'donate') {
      rejectDonateRequest();
    }
    if (shareType === 'sell') {
      rejectSellRequest();
    }
  };

  const AcceptDonateRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(data, 'v1/foodShares/acceptFoodShareBooking');
    setStatus(result.status);

    console.log('Accept Availer Request API Call Result', result.data);
  };

  const AcceptSellRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(data, 'v1/foodShares/acceptFoodShareBooking');
    setStatus(result.status);

    console.log('Accept Availer Request API Call Result', result.data);
  };

  const rejectDonateRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(data, 'v1/foodShares/rejectFoodShareBooking');
    setRejectStatus(result.status);
    console.log('reject Availer Request API Call Result', result.data);
    navigation.navigate('MySharedFood');
  };

  const rejectSellRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(data, 'v1/foodShares/rejectFoodShareBooking');
    setRejectStatus(result.status);
    console.log('reject Availer Request API Call Result', result.data);
    navigation.navigate('MySharedFood');
  };

  //=====================================Link Contact Source============
  const linkingContactPlatform = (linkFor) => {
    let msg = 'From Lets Share: Are You Available? ';
    let phoneWithCountryCode = availerPhoneNumber;

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
          {item.availerAddress && (
            <>
              <CaptionTextPrimary>Availer Address</CaptionTextPrimary>
              <CaptionText>{item.availerAddress}</CaptionText>
            </>
          )}

          {item.availerQuantity && (
            <>
              <CaptionTextPrimary>Requested Quantity</CaptionTextPrimary>
              <CaptionText>{item.availerQuantity}</CaptionText>
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
        </View>
      </View>

      <View style={styles.respondRequest}>
        {status == '200' ? null : item.bookingStatus == 'Pending' ? (
          <>
            <PrimaryButton onPress={() => AcceptRequest(foodShareType)}>
              Accept
            </PrimaryButton>
            <PrimaryButton onPress={() => rejectRequest(foodShareType)}>
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

      {/* <View style={styles.ContactContainer}>
        <View style={styles.acceptButton}>
          {item.isAccepted === true || status == '200' ? (
            <PrimaryButtonDarkGrey>Accepted</PrimaryButtonDarkGrey>
          ) : (
            <PrimaryButton onPress={() => AcceptRequest(foodShareType)}>
              Accept
            </PrimaryButton>
          )}
        </View>
      </View> */}

      {/* <View style={styles.contactIconsView}>
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
    </View>
  );
};

export default Component;
