import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header
        title="Ride Sharing"
        navigation={navigation}
        navigateTo="HomeSearchScreen"
      />
      <Text>Create Ride Component</Text>
      {/* <RideShareHome navigation={navigation} /> */}
    </Container>
  );
};

export default Component;
