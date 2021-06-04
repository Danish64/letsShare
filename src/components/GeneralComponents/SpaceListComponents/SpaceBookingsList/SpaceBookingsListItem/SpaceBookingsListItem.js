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
import {useNavigation, useRoute} from '@react-navigation/native';

import {useIsFocused} from '@react-navigation/native';

const Component = ({item, onPress, shareId, availerPhoneNumber, spaceType}) => {
  const [status, setStatus] = useState('');
  const [rejectStatus, setRejectStatus] = useState('');

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused;
  }, [status]);

  const state = useSelector((state) => state);

  const rejectRequest = (spaceType) => {
    if (spaceType === 'Residence') {
      rejectResidenceRequest();
    }
    if (spaceType === 'Working') {
      rejectWorkingRequest();
    }
  };

  const AcceptRequest = (spaceType) => {
    if (spaceType === 'Residence') {
      AcceptResidenceRequest();
    }
    if (spaceType === 'Working') {
      AcceptWorkingRequest();
    }
  };
  console.log('availerId', item.availerId);
  console.log('shareId', shareId);
  console.log('bookingId', item._id);

  const AcceptResidenceRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/residenceSpaceShares/acceptResidenceSpaceShareBooking',
    );
    setStatus(result.status);

    console.log('Accept Availer Request API Call Result', result.data);
  };

  const AcceptWorkingRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/workingSpaceShares/acceptWorkingSpaceShareBooking',
    );
    setStatus(result.status);

    console.log('Working Space Accept Request API Call Result', result.data);
  };

  const rejectResidenceRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/residenceSpaceShares/rejectResidenceSpaceShareBooking',
    );
    setRejectStatus(result.status);

    console.log('Reject Availer Request API Call Result', result.data);
    navigation.navigate('SharedSpaces');
  };

  const rejectWorkingRequest = async () => {
    const data = {
      availerId: item.availerId,
      shareId: shareId,
      bookingId: item._id,
    };
    const result = await doPutAws(
      data,
      'v1/workingSpaceShares/rejectWorkingSpaceShareBooking',
    );
    setRejectStatus(result.status);

    console.log('Reject working Space Request API Call Result', result.data);
    navigation.navigate('SharedSpaces');
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
    <View key={item._id} style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.spaceDetails}>
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

          {item.availerBeds && (
            <>
              <CaptionTextPrimary>Requested Beds</CaptionTextPrimary>
              <CaptionText>{item.availerBeds}</CaptionText>
            </>
          )}
          {item.availerRooms && (
            <>
              <CaptionTextPrimary>Requested Rooms</CaptionTextPrimary>
              <CaptionText>{item.availerRooms}</CaptionText>
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
            <PrimaryButton onPress={() => AcceptRequest(spaceType)}>
              Accept
            </PrimaryButton>
            <PrimaryButton onPress={() => rejectRequest(spaceType)}>
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
    </View>
  );
};

export default Component;
