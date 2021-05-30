import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import SpaceRequestsList from '../../../../components/GeneralComponents/SpaceListComponents/SpaceBookingsList';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({navigation}) => {
  const route = useRoute();

  return (
    <Container>
      <Header title="Booking Requests" navigation={navigation} hasBackIcon />
      <SpaceRequestsList navigation={navigation} data={route.params.item} />
    </Container>
  );
};

export default Component;
