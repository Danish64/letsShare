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
import {
  TextIcon,
  TextIconSmall,
  Icon,
  TextIconSmallMaterial,
} from 'res/UniversalComponents/TextIcon.js';
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
            {item.spaceType && (
              <View
                style={{
                  width: '80%',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                }}>
                <RecentlySharedTitleText>
                  {item.spaceType}
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
            <View style={styles.spaceDetails}>
              <View style={styles.imageContainer}>
                <Image
                  source={
                    item.spacePictures.length > 0
                      ? {uri: item.spacePictures[0]}
                      : require('../../../../../res/images/ModulesImages/SpaceSharingImages/spaceShare.png')
                  }
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </View>
            <View style={styles.locationDetails}>
              {item.spaceSpecifications && (
                <>
                  <CaptionTextPrimary>Space Specifications</CaptionTextPrimary>
                  <CaptionText>{item.spaceSpecifications}</CaptionText>
                </>
              )}
              <View style={styles.verticalSeparator} />

              {item.spaceLocation && (
                <>
                  <CaptionTextPrimary>Space Location</CaptionTextPrimary>
                  <CaptionText>{item.spaceLocation.address}</CaptionText>
                </>
              )}
            </View>
            <View style={styles.otherDetail}>
              {item.singleShareAbleUnit && (
                <TextIcon flexDirection="column" iconName={'home-outline'}>
                  {item.singleShareAbleUnit}
                </TextIcon>
              )}

              <View style={styles.horizontalSeparator} />

              {item.bedFare && (
                <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                  {item.bedFare}
                </TextIconSmall>
              )}
              {item.roomFare && item.singleShareAbleUnit == 'room' ? (
                <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                  {item.roomFare}
                </TextIconSmall>
              ) : null}
              {item.houseFare && (
                <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                  {item.houseFare}
                </TextIconSmall>
              )}
              {item.seatFare && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextIconSmallMaterial
                    flexDirection="column"
                    iconName={'chair-rolling'}>
                    {item.seatFare}
                  </TextIconSmallMaterial>
                  <Text>{'x' + item.seatsAvailable}</Text>
                </View>
              )}
              {item.deskFare && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextIconSmallMaterial
                    flexDirection="column"
                    iconName={'desk'}>
                    {item.deskFare}
                  </TextIconSmallMaterial>
                  <Text>{'x' + item.desksAvailable}</Text>
                </View>
              )}
              {item.roomFare && item.roomsAvailable ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextIconSmallMaterial
                    flexDirection="column"
                    iconName={'office-building'}>
                    {item.roomFare}
                  </TextIconSmallMaterial>
                  <Text>{'x' + item.roomsAvailable}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Component;
