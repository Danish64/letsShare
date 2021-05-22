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
import ShareCard from '../../../GeneralComponents/ShareCard';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';
import {useIsFocused} from '@react-navigation/native';

const Component = ({navigation, data, listFor}) => {
  const imageURL = {uri: data.ridePictures[0]};
  const isFocused = useIsFocused();

  const [fareType, setFareType] = useState(null);
  const getFareMethod = () => {
    if (data.fareMethod === 'chargePerKm') {
      setFareType(' /Km');
    }
    if (data.fareMethod === 'chargePerHour') {
      setFareType(' /hour');
    }
    if (data.fareMethod === 'chargePerDP') {
      setFareType('');
    }
  };
  useEffect(() => {
    getFareMethod();
  }, [isFocused]);
  // console.log('Data from Create Ride Action Area to Shared Ride', data);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {data.ridePictures.length > 0 && (
          <View style={styles.imageContainer}>
            <Image source={imageURL} style={styles.image} />
          </View>
        )}

        <View style={styles.subContainer2}>
          {data.rideCategory && (
            <View style={styles.categoryTitleText}>
              <RecentlySharedTitleText>
                {data.rideCategory}
              </RecentlySharedTitleText>
            </View>
          )}
          <View style={styles.rowSeparator} />
          <View style={styles.row}>
            <RecentlySharedSubtitleText>Ride Name</RecentlySharedSubtitleText>
            <RecentlySharedSubtitleText>
              {data.rideName}
            </RecentlySharedSubtitleText>
          </View>

          <View style={styles.row}>
            <RecentlySharedSubtitleText>Ride Reg No</RecentlySharedSubtitleText>
            <RecentlySharedSubtitleText>
              {data.registrationNumber}
            </RecentlySharedSubtitleText>
          </View>
          {data.seatsAvailable && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Seats Available:
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.seatsAvailable}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.fareMethod && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Fare:</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.fareMethod}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.fareRate && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Fare:</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {'Rs ' + data.fareRate + fareType}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.departureDate && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Departure Date:
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.departureDate}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.departureTime && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Departure Time:
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.departureTime}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.returnDate && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Return Date:
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.returnDate}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.tourDays && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Tour Duration
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.tourDays + ' Days'}
              </RecentlySharedSubtitleText>
            </View>
          )}
          <View style={styles.rowSeparator} />

          {data.startLocation && (
            <View>
              <View style={styles.locationBody}>
                <RecentlySharedTitleText>
                  Start Location
                </RecentlySharedTitleText>
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
                <RecentlySharedTitleText>
                  Destination Location
                </RecentlySharedTitleText>
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
        </View>
        <View style={styles.bookRideButtonView}>
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
