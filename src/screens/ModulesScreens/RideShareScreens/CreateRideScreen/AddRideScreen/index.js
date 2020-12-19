import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import AddRideFormContainer from '../../../../../components/ContainersComponent/RideShareContainer/CreateRideContainer/AddRideFormContainer';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header navigation={navigation} hasBackIcon title="Add Ride" />
      <AddRideFormContainer navigation={navigation} />
    </Container>
  );
};

export default Component;
