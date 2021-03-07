import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './style';
import {
  BodyTextBlack,
  BodyTextBold,
  SubtitleTextBold,
} from 'res/UniversalComponents/Text';
import {ShareButton} from 'res/UniversalComponents/Button';
import ShareCard from '../../../GeneralComponents/ShareCard';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Component = ({navigation, data}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <View style={styles.subContainer1}>
        <View style={styles.imageContainer}>
          <Image source={data.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.subContainer2}>
        <View style={styles.titleSection}>
          {/* <BodyTextBold>{data.title}</BodyTextBold> */}
          <SubtitleTextBold>{data.rideName}</SubtitleTextBold>
        </View>
        <View style={styles.detailsSection}>
          <BodyTextBold>Registration No:</BodyTextBold>
          <BodyTextBlack>{data.registrationNo}</BodyTextBlack>
        </View>
        {data.rideCategory && (
          <View style={styles.detailsSection}>
            <BodyTextBold>Ride Category:</BodyTextBold>
            <BodyTextBlack>{data.rideCategory}</BodyTextBlack>
          </View>
        )}
        {data.fare && (
          <View style={styles.detailsSection}>
            <BodyTextBold>Fare:</BodyTextBold>
            <BodyTextBlack>{data.fare}</BodyTextBlack>
          </View>
        )}
        {data.departureDate && (
          <View style={styles.detailsSection}>
            <BodyTextBold>Departure Date:</BodyTextBold>
            <BodyTextBlack>{data.departureDate}</BodyTextBlack>
          </View>
        )}
        {data.departureTime && (
          <View style={styles.detailsSection}>
            <BodyTextBold>Departure Time:</BodyTextBold>
            <BodyTextBlack>{data.departureTime}</BodyTextBlack>
          </View>
        )}
        {data.deliveryInfo && (
          <View style={styles.detailsSection}>
            <BodyTextBold>Delivery Info:</BodyTextBold>
            <BodyTextBlack>{data.deliveryInfo}</BodyTextBlack>
          </View>
        )}
        <View style={styles.locationBody}>
          <BodyTextBold>Start Location:</BodyTextBold>
          <BodyTextBlack>
            {data.startLocation.details.description}
          </BodyTextBlack>
        </View>
        <View style={styles.locationContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 24.8307323,
              longitude: 67.10113298,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: data.startLocation.details.geometry.location.lat,
                longitude: data.startLocation.details.geometry.location.lng,
              }}
            />
          </MapView>
        </View>
        <View style={styles.locationBody}>
          <BodyTextBold>Destination Location:</BodyTextBold>
          <BodyTextBlack>
            {data.destinationLocation.details.description}
          </BodyTextBlack>
        </View>
        <View style={styles.locationContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 24.8307323,
              longitude: 67.10113298,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude:
                  data.destinationLocation.details.geometry.location.lat,
                longitude:
                  data.destinationLocation.details.geometry.location.lng,
              }}
            />
          </MapView>
        </View>
        {data.seatsAvailable && (
          <View style={styles.detailsSection}>
            <BodyTextBold>Seats Available:</BodyTextBold>
            <BodyTextBlack>{data.seatsAvailable}</BodyTextBlack>
          </View>
        )}
        {data.listFor && (
          <View style={styles.detailsSection}>
            <BodyTextBold>List for:</BodyTextBold>
            <BodyTextBlack>{data.listFor}</BodyTextBlack>
          </View>
        )}
      </View>
    </View>
  );
};

export default Component;
