import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
} from 'react-native';
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
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Component = ({item, onPress, renderRightAction}) => {
  const linkingContactPlatform = (linkFor) => {
    let msg = 'From LetsShare:  ';
    let phoneWithCountryCode = item.managerContact.substr(
      1,
      item.managerContact.length,
    );

    let mobile = '+92' + phoneWithCountryCode;
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
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BodyTextBold>{item.eventTitle}</BodyTextBold>
            <CaptionTextPrimary>{item.eventDuration}</CaptionTextPrimary>
          </View>
          <View style={{width: '80%', marginTop: 5}}>
            <CaptionText>{item.eventDescription}</CaptionText>
          </View>

          <View style={{width: '80%', marginTop: 5, flexDirection: 'row'}}>
            <CaptionTextPrimary>{item.eventStartDate}</CaptionTextPrimary>
            {item.eventEndDate && (
              <CaptionTextPrimary> to {item.eventEndDate}</CaptionTextPrimary>
            )}
          </View>

          <View style={{width: '80%', marginTop: 5, flexDirection: 'row'}}>
            <CaptionTextPrimary>Shares Available: </CaptionTextPrimary>
            <CaptionTextPrimary>{item.sharings.length}</CaptionTextPrimary>
          </View>
        </TouchableOpacity>
        <View style={{width: '90%', marginVertical: 5, alignItems: 'center'}}>
          <CaptionText>Contact Manager</CaptionText>
        </View>
        <View style={styles.contactView}>
          <TouchableOpacity onPress={() => linkingContactPlatform('Call')}>
            <Ionicons name="call" size={30} color={Colors.Primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => linkingContactPlatform('SMS')}>
            <Ionicons name="chatbox" size={30} color={Colors.Primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => linkingContactPlatform('WhatsApp')}>
            <Ionicons name="logo-whatsapp" size={30} color={Colors.Primary} />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
};

export default Component;
