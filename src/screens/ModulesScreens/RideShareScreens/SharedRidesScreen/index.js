import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';
import Header from '../../../../components/GeneralComponents/Header';
import SharedRidesList from '../../../../components/GeneralComponents/SharedRidesList';
import RecentlySharedItem from '../../../../components/ScreensMainComponents/RideShareComponents/RecentlySharedItem';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({navigation}) => {
  const route = useRoute();
  console.log('Shared Rides data', route.params.data);

  return (
    <Container>
      <Header title="My Shared Rides" hasBackIcon navigation={navigation} />
      <SharedRidesList navigation={navigation} data={route.params.data} />
    </Container>
  );
};

export default Component;
