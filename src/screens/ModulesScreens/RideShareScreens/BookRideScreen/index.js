import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';

import Header from '../../../../components/GeneralComponents/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BookNearbyRideForm from '../../../../components/ScreensMainComponents/RideShareComponents/BookNearbyRideForm';
import BookCityToCityRideForm from '../../../../components/ScreensMainComponents/RideShareComponents/BookCityToCityRideForm';
import BookTourRideForm from '../../../../components/ScreensMainComponents/RideShareComponents/BookTourRideForm';

import {ScrollView} from 'react-native-gesture-handler';

const Component = ({navigation, route, listFor}) => {
  const formCategory = route.params.listFor;

  if (formCategory === 'CityToCity') {
    return (
      <Container>
        <Header title="Request Booking" hasBackIcon navigation={navigation} />
        <BookCityToCityRideForm
          navigation={navigation}
          data={route.params.data}
        />
      </Container>
    );
  }
  if (formCategory === 'TourRide') {
    return (
      <Container>
        <Header title="Request Booking" hasBackIcon navigation={navigation} />
        <BookTourRideForm navigation={navigation} data={route.params.data} />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Request Booking" hasBackIcon navigation={navigation} />
      <BookNearbyRideForm navigation={navigation} data={route.params.data} />
    </Container>
  );
};

export default Component;
