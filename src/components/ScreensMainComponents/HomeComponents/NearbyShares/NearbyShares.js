import React from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';
import {SectionHeadingText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import DRCaseImage from 'res/images/ModulesImages/GeneralImages/myLocation.png';
import shareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import shareFood from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import shareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = (navigation) => {
  const data = [
    {
      id: '1',
      rideName: 'Honda Civic',
      rideType: 'Nearby Ride',
      registrationNo: 'ABC-6574',
      contactNumber: '03345656568',
      rideCategory: 'car',
      image: shareRide,
      fare: '200',
      seatsAvailable: '2',
      startLocation: {
        data: {
          description: 'KRL Road, Rawalpindi to G11/4, Islamabad',
          geometry: {
            location: {
              lat: 24.8307323,
              lng: 67.10113298,
            },
          },
        },
      },
      destinationLocation: {
        data: {
          description: 'Home location',
          geometry: {
            location: {
              lat: 24.8307323,
              lng: 67.10113298,
            },
          },
        },
      },
      listFor: '2',
    },

    {
      id: 2,
      title: 'Book',
      quantity: '1',
      description: ' A Silent Patient',
      location: 'G11/3,Islamabad to G13/1,Islamabad',
      pickupLocation: {
        data: {
          description: 'Rawal Town, Islamabad',
          geometry: {
            location: {
              lat: 24.8307323,
              lng: 67.10113298,
            },
          },
        },
      },
      image: shareGoods,
      PickupTime: '10AM to 5PM',
      listFor: '5',
    },

    {
      id: 3,
      title: 'Bottle',
      quantity: '1',
      description: 'Plastic water bottle',
      image: shareGoods,
      location: 'G11/3,Islamabad to G13/1,Islamabad',
      pickupLocation: {
        data: {
          description: 'Saddar, Rawalpindi',
          geometry: {
            location: {
              lat: 24.8307323,
              lng: 67.10113298,
            },
          },
        },
      },
      PickupTime: '10AM to 5PM',
      listFor: '5',
    },

    {
      id: 4,
      title: 'Living Space',
      quantity: '1',
      description: '2 Bedroom Flat',
      image: shareGoods,
      location: 'G11/3,Islamabad to G13/1,Islamabad',
      pickupLocation: {
        data: {
          description: 'Warda Hamna Residencia, g11/3,Islamabad',
          geometry: {
            location: {
              lat: 24.8307323,
              lng: 67.10113298,
            },
          },
        },
      },
      PickupTime: '10AM to 5PM',
      listFor: '5',
    },
  ];

  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.nearByShareTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList
          navigation={navigation}
          data={data}
          screen="RecentlySharedScreen"
        />
      </View>
    </View>
  );
};

export default Component;
