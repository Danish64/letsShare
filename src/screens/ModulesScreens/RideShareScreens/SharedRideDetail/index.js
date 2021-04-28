import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import SharedRidesList from '../../../../components/GeneralComponents/SharedRidesList';
import RecentlySharedItem from '../../../../components/ScreensMainComponents/RideShareComponents/RecentlySharedItem';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({navigation, item}) => {
  const route = useRoute();
  console.log('Shared Ride Detail Screen', route.params.item);

  // console.log('Shared Rides Detail Screen', route.params.data);

  return (
    <Container>
      <Header title="My Shared Rides" hasBackIcon navigation={navigation} />

      <RecentlySharedItem navigation={navigation} data={route.params.item} />
      {/* <SharedRidesList navigation={navigation} data={route.params.data} /> */}
    </Container>
  );
};

export default Component;
