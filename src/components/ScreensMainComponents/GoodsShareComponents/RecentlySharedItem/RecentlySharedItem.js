import React, { useEffect, useState } from 'react';
import {View, Text, Image,  Button } from 'react-native';
import styles from './style';
import {BodyTextBlack, BodyTextBold, SubtitleTextBold} from '../../../../res/UniversalComponents/Text';
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';
import ShareCard from '../../../GeneralComponents/ShareCard';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import image from '../../../../res/images/ModulesImages/FoodSharingImages/shareFood.png'


const Component = ({navigation, data}) => {
   
    return(
        <View style={styles.mainContainer}>
            {/* <Text>{JSON.stringify(data)}</Text> */}
            <View style={styles.subContainer1}>
                <View style={styles.imageContainer}>
                    <Image source={data.image} style={styles.image}/>
                </View>
                {/* {data.image.filePath.uri && (
                    <View style={styles.imageContainer}>
                        <Image source={{uri: filePart.uri}} style={styles.image}/>
                    </View>
                )} */}
            </View>
            <View style={styles.subContainer2}>
                <View style={styles.titleSection}>
                    {/* <BodyTextBold>{data.title}</BodyTextBold> */}
                    <SubtitleTextBold>{data.title}</SubtitleTextBold>
                </View>
                <View style={styles.descriptionSection}>
                    <BodyTextBlack>{data.description}</BodyTextBlack>
                </View>
                <View style={styles.detailsSection}>
                    <BodyTextBold>Quantity:</BodyTextBold>
                    <BodyTextBlack>{data.quantity}</BodyTextBlack>
                </View>
                {data.pickUpTime && (
                    <View style={styles.detailsSection}>
                        <BodyTextBold>pickUp Time:</BodyTextBold>
                        <BodyTextBlack>{data.pickUpTime}</BodyTextBlack>
                    </View>
                )}
                {data.price && (
                    <View style={styles.detailsSection}>
                        <BodyTextBold>Price:</BodyTextBold>
                        <BodyTextBlack>{data.price}</BodyTextBlack>
                    </View>
                )}
                {data.deliveryInfo && (
                    <View style={styles.detailsSection}>
                        <BodyTextBold>Delivery Info:</BodyTextBold>
                        <BodyTextBlack>{data.deliveryInfo}</BodyTextBlack>
                    </View>
                )}

                <View style={styles.locationBody}>
                    <BodyTextBold>Location:</BodyTextBold>
                    <BodyTextBlack>{data.pickUpLocation.description}</BodyTextBlack>
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
    )
};

export default Component;