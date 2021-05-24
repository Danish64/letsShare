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
import RidesIcon from '../../../../res/images/ModulesImages/RideSharingImages/ShareRide.png';
import ShareGoodsIcon from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';

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
          {item.shareType && (
            <View style={{width: '100%', alignItems: 'center', paddingTop: 10}}>
              <RecentlySharedTitleText>
                {item.shareType}
              </RecentlySharedTitleText>
            </View>
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.goodsDetails}>
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
            <View style={styles.horizontalSeparator} />

            {item.pickUpLocation && (
              <>
                <CaptionTextPrimary>Pickup Location</CaptionTextPrimary>
                <CaptionText>{item.pickUpLocation.address}</CaptionText>
              </>
            )}
          </View>
          <View style={styles.otherDetail}>
            {item.listForDays && (
              <TextIcon
                flexDirection="column"
                iconName={'today-outline'}
                color="#006d77">
                {item.listForDays + ' Day(s)'}
              </TextIcon>
            )}

            <View style={styles.horizontalSeparator} />

            {item.pickUpTime && (
              <TextIcon
                flexDirection="column"
                iconName={'time'}
                color="#006d77">
                {item.pickUpTime}
              </TextIcon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
