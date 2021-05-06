import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import styles from './style';
import {
  BodyTextBlack,
  BodyTextBold,
  SubtitleTextBold,
} from 'res/UniversalComponents/Text';
import {ShareButton} from 'res/UniversalComponents/Button';
import ShareCard from '../../../GeneralComponents/ShareCard';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';

const Component = ({navigation, data, listFor}) => {
  // console.log('Data from Create Ride Action Area to Shared Ride', data);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* <View style={styles.subContainer1}>
        <View style={styles.imageContainer}>
          <Image source={data.image} style={styles.image} />
        </View>
      </View> */}
        <View style={styles.subContainer2}>
          <View style={styles.titleSection}>
            {/* <BodyTextBold>{data.title}</BodyTextBold> */}
            <SubtitleTextBold>{data.rideName}</SubtitleTextBold>
          </View>
          <View style={styles.detailsSection}>
            <BodyTextBold>Registration No:</BodyTextBold>
            <BodyTextBlack>{data.registrationNumber}</BodyTextBlack>
          </View>
          {data.rideCategory ? (
            <View style={styles.detailsSection}>
              <BodyTextBold>Ride Category:</BodyTextBold>
              <BodyTextBlack>{data.rideCategory}</BodyTextBlack>
            </View>
          ) : (
            <Text></Text>
          )}
          {data.fare ? (
            <View style={styles.detailsSection}>
              <BodyTextBold>Fare:</BodyTextBold>
              <BodyTextBlack>{data.fare}</BodyTextBlack>
            </View>
          ) : (
            <Text></Text>
          )}
          {data.departureDate ? (
            <View style={styles.detailsSection}>
              <BodyTextBold>Departure Date:</BodyTextBold>
              <BodyTextBlack>{data.departureDate}</BodyTextBlack>
            </View>
          ) : (
            <Text></Text>
          )}
          {data.departureTime ? (
            <View style={styles.detailsSection}>
              <BodyTextBold>Departure Time:</BodyTextBold>
              <BodyTextBlack>{data.departureTime}</BodyTextBlack>
            </View>
          ) : (
            <Text></Text>
          )}
          {data.deliveryInfo ? (
            <View style={styles.detailsSection}>
              <BodyTextBold>Delivery Info:</BodyTextBold>
              <BodyTextBlack>{data.deliveryInfo}</BodyTextBlack>
            </View>
          ) : (
            <Text></Text>
          )}
          {data.startLocation && (
            <View>
              <View style={styles.locationBody}>
                <BodyTextBold>Start Location:</BodyTextBold>
                <BodyTextBlack>{data.startLocation.address}</BodyTextBlack>
              </View>
              <View style={styles.locationContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  region={{
                    latitude: parseFloat(data.startLocation.latitude),
                    longitude: parseFloat(data.startLocation.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: parseFloat(data.startLocation.latitude),
                      longitude: parseFloat(data.startLocation.longitude),
                    }}
                  />
                </MapView>
              </View>
            </View>
          )}
          {data.destinationLocation && (
            <View>
              <View style={styles.locationBody}>
                <BodyTextBold>Destination Location:</BodyTextBold>
                <BodyTextBlack>
                  {data.destinationLocation.address}
                </BodyTextBlack>
              </View>
              <View style={styles.locationContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  region={{
                    latitude: parseFloat(data.destinationLocation.latitude),
                    longitude: parseFloat(data.destinationLocation.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: parseFloat(data.destinationLocation.latitude),
                      longitude: parseFloat(data.destinationLocation.longitude),
                    }}
                  />
                </MapView>
              </View>
            </View>
          )}
          {data.seatsAvailable ? (
            <View style={styles.detailsSection}>
              <BodyTextBold>Seats Available:</BodyTextBold>
              <BodyTextBlack>{data.seatsAvailable}</BodyTextBlack>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>
        <View style={{width: 150, alignSelf: 'center'}}>
          <PrimaryButton
            onPress={() =>
              navigation.navigate('BookRideScreen', {
                data: data,
                listFor: listFor,
              })
            }>
            Book Ride
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default Component;
