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

const Component = ({navigation, data, listFor}) => {
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
          {data.roomsAvailable && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>
                Rooms Available
              </RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.roomsAvailable}
              </RecentlySharedSubtitleText>
            </View>
          )}

          {data.roomFare && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Rent</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.roomFare}
              </RecentlySharedSubtitleText>
            </View>
          )}
          {data.bedFare && (
            <View style={styles.row}>
              <RecentlySharedSubtitleText>Rent</RecentlySharedSubtitleText>
              <RecentlySharedSubtitleText>
                {data.bedFare}
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
          {data.amenity && (
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
                listFor: listFor,
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
