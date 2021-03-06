import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import Header from '../../../../../components/GeneralComponents/Header';
import TourRideFormArea from '../../../../../components/ScreensMainComponents/RideShareComponents/TourRideFormArea';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
        <Header navigation={navigation} hasBackIcon title="Tour Ride" />
        <ScrollViewContainer>
          <TourRideFormArea navigation={navigation} Data={route.params.item}/>
        </ScrollViewContainer>
    </Container>
  );
};

export default Component;