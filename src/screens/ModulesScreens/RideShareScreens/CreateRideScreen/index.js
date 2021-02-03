import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import CreateRideContainer from '../../../../components/ContainersComponent/RideShareContainer/CreateRideContainer';

//Native Exports Ends Here
//Third Party  Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header navigation={navigation} hasBackIcon title="Share Ride" />
      <CreateRideContainer navigation={navigation} />
    </Container>
  );
};

export default Component;
