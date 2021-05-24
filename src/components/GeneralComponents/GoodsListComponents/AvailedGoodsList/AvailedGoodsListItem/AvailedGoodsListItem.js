import React from 'react';
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
import ShareFoodIcon from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Component = ({item, renderRightAction}) => {
  return (
    <TouchableHighlight>
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {item.shareType && (
            <View style={{width: '80%', alignItems: 'center', paddingTop: 10}}>
              <RecentlySharedTitleText>
                {item.shareType}
              </RecentlySharedTitleText>
            </View>
          )}
          {item.isCompleted === true ? (
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
              <Image source={ShareFoodIcon} style={styles.image} />
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
        {item.isCompleted === true ? (
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
