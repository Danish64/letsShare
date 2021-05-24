import React from 'react';
import {View} from 'react-native';
import {SectionHeadingText} from 'res/UniversalComponents/Text.js';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';
import styles from './style';
import DRCaseImage from 'res/images/ModulesImages/GeneralImages/myLocation.png';
import ShareSpace from 'res/images/ModulesImages/SpaceSharingImages/selectHome.png';
import shareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import shareFood from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import shareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';

const Component = () => {
  const data = [
    {
      id: '1',
      rideName: 'Honda Civic',
      rideType: 'Car',
      registrationNo: 'ABC-6574',
      contactNumber: '03345656568',
      rideCategory: 'Nearby',
      ridePictures: shareRide,
      fareRate: '200',
      fareMethod: 'chargePerKm',
      seatsAvailable: '2',
      startLocation: {
        address: 'G11/4, Islamabad',
        lat: 24.8307323,
        lng: 67.10113298,
      },
      destinationLocation: {
        address: 'Comsats University, Islamabad',
        lat: 24.8307323,
        lng: 67.10113298,
      },
    },

    {
      id: '2',
      title: 'Book',
      quantity: '1',
      description: ' A Silent Patient',
      location: 'G11/3,Islamabad to G13/1,Islamabad',
      pickUpLocation: {
        address: 'G11/4, Islamabad',
        lat: 24.8307323,
        lng: 67.10113298,
      },
      images: shareGoods,
      PickupTime: '10AM to 5PM',
      price: '200',
      listFor: '5',
    },

    {
      id: '3',
      title: 'Bottle',
      quantity: '1',
      description: 'Plastic water bottle',
      images: shareGoods,
      location: 'G11/3,Islamabad to G13/1,Islamabad',
      pickUpLocation: {
        address: 'G11/4, Islamabad',
        lat: 24.8307323,
        lng: 67.10113298,
      },
      PickupTime: '10AM to 5PM',
      listFor: '5',
      price: '300',
    },

    {
      id: '4',
      title: 'Living Space',
      quantity: '1',
      description: '2 Bedroom Flat',
      images: shareGoods,
      location: 'G11/3,Islamabad to G13/1,Islamabad',
      pickUpLocation: {
        address: 'G11/4, Islamabad',
        lat: 24.8307323,
        lng: 67.10113298,
      },
      PickupTime: '10AM to 5PM',
      listFor: '5',
      price: '12000',
    },
  ];

  return (
    <View style={styles.recommendedArea}>
      <View style={styles.recommendedAreaTitleText}>
        <SectionHeadingText>Recommended Shares</SectionHeadingText>
      </View>
      <View style={styles.recommendedFlatlistArea}>
        <HorizontalFlatList
          data={data}
          screen="RecentlySharedScreen"
          onPress={() => {
            console.log('Recommended Shared Item Pressed');
          }}
        />
      </View>
    </View>
  );
};

export default Component;
