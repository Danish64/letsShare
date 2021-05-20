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
import ShareFoodIcon from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import {Colors} from 'res/constants/Colors.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Component = ({item, renderRightAction, onPress}) => {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.mainContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {item.shareType && (
              <View
                style={{width: '80%', alignItems: 'center', paddingTop: 10}}>
                <RecentlySharedTitleText>
                  {item.shareType}
                </RecentlySharedTitleText>
              </View>
            )}
            {item.bookings.length === 0 ? (
              <View />
            ) : (
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 15,
                  backgroundColor: Colors.Primary,
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
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Component;
