import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import styles from './style';
import {
  BodyTextBlack,
  BodyTextBold,
  SubtitleTextBold,
  SubtitleText,
  CaptionText,
  CaptionTextPrimary,
  FormText,
  BodyTextLight,
  BodyText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';

const Component = ({navigation, data, listFor}) => {
  const imageURL = {uri: data.images[0]};
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {data.images.length > 0 && (
          <View style={styles.imageContainer}>
            <Image source={imageURL} style={styles.image} />
          </View>
        )}

        <View style={styles.subContainer2}>
          {data.shareType && (
            <View style={styles.categoryTitleText}>
              <RecentlySharedTitleText>{data.title}</RecentlySharedTitleText>
            </View>
          )}
          <View style={styles.rowSeparator} />

          {data.description && (
            <View style={styles.descriptionView}>
              <BodyTextBlack>{data.description}</BodyTextBlack>
            </View>
          )}
          {data.price && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Price:</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.price}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.quantity && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                {data.shareType == 'stall' ? 'Share Type' : 'Quantity'}
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.shareType == 'stall' ? 'Stall' : data.quantity}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.pickUpTime && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                {data.shareType == 'stall' ? 'Start Time' : 'PickUp Time'}
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.pickUpTime}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.shareType == 'stall' && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>End Time</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.deliveryInfo}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.listForDays && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>List For</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.listForDays + ' Day(s)'}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.deliveryInfo && (
            <>
              <View style={styles.deliveryInfoView}>
                <RecentlySharedTitleText>
                  {' '}
                  {data.shareType == 'stall' ? '' : 'Delivery Info'}
                </RecentlySharedTitleText>
                <RecentlySharedSubtitleText>
                  {data.shareType == 'stall' ? '' : data.deliveryInfo}
                </RecentlySharedSubtitleText>
              </View>
            </>
          )}

          <View style={styles.rowSeparator} />

          {data.pickUpLocation && (
            <View>
              <View style={styles.locationBody}>
                <RecentlySharedTitleText>
                  {data.shareType == 'stall'
                    ? 'Stall Location'
                    : 'PickUp Location'}
                </RecentlySharedTitleText>
                <BodyTextBlack>{data.pickUpLocation.address}</BodyTextBlack>
              </View>
              <View style={styles.locationContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  region={{
                    latitude: parseFloat(data.pickUpLocation.latitude),
                    longitude: parseFloat(data.pickUpLocation.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: parseFloat(data.pickUpLocation.latitude),
                      longitude: parseFloat(data.pickUpLocation.longitude),
                    }}
                  />
                </MapView>
              </View>
            </View>
          )}
        </View>
        {data.shareType == 'stall' ? null : (
          <View style={styles.bookFoodButtonView}>
            <PrimaryButton
              onPress={() =>
                navigation.navigate('BookFood', {
                  data: data,
                  listFor: listFor,
                })
              }>
              Send Booking Request
            </PrimaryButton>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Component;
