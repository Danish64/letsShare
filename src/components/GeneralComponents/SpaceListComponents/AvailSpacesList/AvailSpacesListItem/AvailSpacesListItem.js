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
          <View style={styles.foodDetails}>
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
            {item.bedFare && (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {item.bedFare}
              </TextIconSmall>
            )}
            {item.roomFare && (
              <TextIconSmall flexDirection="column" iconName={'cash-outline'}>
                {item.roomFare}
              </TextIconSmall>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
