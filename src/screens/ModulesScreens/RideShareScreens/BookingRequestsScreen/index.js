import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import RequestsList from '../../../../components/GeneralComponents/RequestList';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({navigation, item}) => {
  const route = useRoute();

  return (
    <Container>
      <Header title="Booking Requests" hasBackIcon navigation={navigation} />
      <RequestsList navigation={navigation} data={route.params.item} />
    </Container>
  );
};

export default Component;
