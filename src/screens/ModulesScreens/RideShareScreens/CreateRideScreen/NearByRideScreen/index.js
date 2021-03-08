import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import NearbyRideFormArea from '../../../../../components/ScreensMainComponents/RideShareComponents/NearbyRideFormArea';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>    
      <Header navigation={navigation} hasBackIcon title="Nearby Ride" />
      <ScrollViewContainer>
        <NearbyRideFormArea navigation={navigation} Data={route.params.item}/>
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;