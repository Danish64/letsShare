import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import {Colors} from 'res/constants/Colors.js';

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
  Icon,
  TextIconSmall,
  TextIconSmallMaterial,
} from 'res/UniversalComponents/TextIcon.js';
import SpaceIcon from 'res/images/ModulesImages/SpaceSharingImages/spaceShare.png';

const Component = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {item.spaceType && (
            <View style={{width: '100%', alignItems: 'center', paddingTop: 10}}>
              <RecentlySharedTitleText>
                {item.spaceType}
              </RecentlySharedTitleText>
            </View>
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.spaceDetails}>
            <View style={styles.imageContainer}>
              <Image source={SpaceIcon} style={styles.image} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          </View>
          <View style={styles.locationDetails}>
            {item.spaceSpecifications && (
              <>
                <CaptionTextPrimary>Specifications</CaptionTextPrimary>
                <CaptionText>{item.spaceSpecifications}</CaptionText>
              </>
            )}
            <View style={styles.horizontalSeparator} />

            {item.spaceLocation && (
              <>
                <CaptionTextPrimary>space Location</CaptionTextPrimary>
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
            {item.bedFare && item.singleShareAbleUnit == 'bed' ? (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {item.bedFare}
              </TextIconSmall>
            ) : null}
            {item.roomFare && item.singleShareAbleUnit == 'room' ? (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {item.roomFare}
              </TextIconSmall>
            ) : null}
            {item.houseFare && item.singleShareAbleUnit == 'house' ? (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {item.houseFare}
              </TextIconSmall>
            ) : null}
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
                <TextIconSmallMaterial flexDirection="column" iconName={'desk'}>
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
  );
};

export default Component;
