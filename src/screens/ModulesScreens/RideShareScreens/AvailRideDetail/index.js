import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import SharedRidesList from '../../../../components/GeneralComponents/SharedRidesList';
import AvailRideItem from '../../../../components/ScreensMainComponents/RideShareComponents/AvailRideItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation, item}) => {
  const route = useRoute();
  //console.log('Avail Ride Detail Screen', route.params.item);

  return (
    <Container>
      <Header title="Ride Detail" hasBackIcon navigation={navigation} />
      <AvailRideItem navigation={navigation} data={route.params.item} />
    </Container>
  );
};

export default Component;
