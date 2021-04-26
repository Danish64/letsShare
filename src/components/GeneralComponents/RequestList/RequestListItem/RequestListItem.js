import React from 'react';
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
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';
import {useSelector} from 'react-redux';
import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
  doPutAws,
} from '../../../../utils/AxiosMethods';

const Component = ({item, onPress, shareId}) => {
  const state = useSelector((state) => state);
  const bookingId = state.userInformation.user._id;
  const availerId = item.availerId;

  console.log('Booking Item', item);

  console.log('Availer Id ', item.availerId);
  console.log('Share Id', shareId);
  console.log('Booking Id', bookingId);

  const AcceptRequest = async () => {
    const data = {
      availerId: availerId,
      shareId: shareId,
      bookingId: bookingId,
    };
    const result = await doPutAws(
      data,
      'v1/nearByRideShares/acceptNearByRidesSharesBooking',
    );

    console.log('Accept Availer Request API Call Result', result.data);
    // const rides = result.data.map((item) => {
    //   item.selected = false;
    //   return item;
    // });
    // //  console.log(rides);
    // setData(rides);
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
            <CaptionText>{item.availerPickUpLocation.address}</CaptionText>
          )}

          <Icon flexDirection="column" iconName={'pin-outline'}></Icon>
          {item.availerDropOffLocation && (
            <CaptionText>{item.availerDropOffLocation.address}</CaptionText>
          )}
        </View>
        <View style={styles.otherDetail}>
          {item.isAccepted === false ? (
            <View
              style={{
                width: '20%',
                height: 15,
                // backgroundColor: 'blue',
                borderRadius: 35,
                backgroundColor: Colors.Failure,
              }}
            />
          ) : (
            <View
              style={{
                width: '5%',
                height: 15,
                // backgroundColor: 'blue',
                borderRadius: 30,
                backgroundColor: Colors.Primary,
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
          <PrimaryButton onPress={() => AcceptRequest()}>
            {item.isAccepted ? 'Accepted' : 'Accept Request'}
          </PrimaryButton>
        </View>
        <View style={styles.callButton}>
          <TouchableOpacity
            onPress={() => {
              console.log('call Button Pressed');
            }}>
            <Ionicons
              name="call"
              color={item.isAccepted ? Colors.Primary : Colors.LightGrey}
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
              color={item.isAccepted ? Colors.Primary : Colors.LightGrey}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
