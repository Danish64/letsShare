import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './style';
import {
  BodyTextBlack,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';

const Component = ({navigation, data, spaceType}) => {
  console.log('Space Detail Screen', data);
  const imageURL = {uri: data.spacePictures[0]};
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {data.spacePictures.length > 0 && (
          <View style={styles.imageContainer}>
            <Image source={imageURL} style={styles.image} />
          </View>
        )}

        <View style={styles.subContainer2}>
          {data.spaceType && (
            <View style={styles.categoryTitleText}>
              <RecentlySharedTitleText>
                {data.spaceType}
              </RecentlySharedTitleText>
            </View>
          )}
          <View style={styles.rowSeparator} />

          {data.spaceTitle && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Space Title
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.spaceTitle}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.singleShareAbleUnit && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Space Type:
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.singleShareAbleUnit}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.roomsAvailable && data.singleShareAbleUnit == 'room' ? (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Rooms Available
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.roomsAvailable}
              </RecentlySharedSubtitleText>
            </View>
          ) : null}

          {data.roomFare && data.singleShareAbleUnit == 'room' ? (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Rent</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.roomFare}
              </RecentlySharedSubtitleText>
            </View>
          ) : null}
          {data.bedFare && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Rent</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.bedFare}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.bedsAvailable && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Available Beds
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.bedsAvailable}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.houseFare && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Rent</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.houseFare}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.roomsAvailable && data.spaceCategory == 'Working' ? (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Available rooms
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.roomsAvailable}
              </RecentlySharedSubtitleText>
            </View>
          ) : null}
          {data.roomFare && data.spaceCategory == 'Working' ? (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Room Fare</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.roomFare}
              </RecentlySharedSubtitleText>
            </View>
          ) : null}

          {data.seatsAvailable && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Available Seats
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.seatsAvailable}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.seatFare && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Seat Fare</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.seatFare}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.desksAvailable && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Available desks
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.desksAvailable}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.deskFare && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Desk Fare</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.deskFare}
              </RecentlySharedSubtitleText>
            </View>
          )}

          <View style={styles.rowSeparator} />
          {data.spaceDescription && (
            <View style={styles.locationBody}>
              <RecentlySharedTitleText>
                Space Description
              </RecentlySharedTitleText>
              <BodyTextBlack>{data.spaceDescription}</BodyTextBlack>
            </View>
          )}
          {data.spaceSpecifications && (
            <View style={styles.locationBody}>
              <RecentlySharedTitleText>
                Space Specifications
              </RecentlySharedTitleText>
              <BodyTextBlack>{data.spaceSpecifications}</BodyTextBlack>
            </View>
          )}
          {data.amenity.length == 1 && (
            <View style={styles.locationBody}>
              <RecentlySharedTitleText>Space Amenities</RecentlySharedTitleText>
              <BodyTextBlack>{data.amenity.join()}</BodyTextBlack>
            </View>
          )}

          {data.spaceLocation && (
            <View>
              <View style={styles.locationBody}>
                <RecentlySharedTitleText>
                  Space Location
                </RecentlySharedTitleText>
                <BodyTextBlack>{data.spaceLocation.address}</BodyTextBlack>
              </View>
              <View style={styles.locationContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  region={{
                    latitude: parseFloat(data.spaceLocation.latitude),
                    longitude: parseFloat(data.spaceLocation.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: parseFloat(data.spaceLocation.latitude),
                      longitude: parseFloat(data.spaceLocation.longitude),
                    }}
                  />
                </MapView>
              </View>
            </View>
          )}
        </View>
        <View style={styles.bookFoodButtonView}>
          <PrimaryButton
            onPress={() =>
              navigation.navigate('BookSpace', {
                data: data,
                listFor: spaceType,
              })
            }>
            Send Booking Request
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default Component;
