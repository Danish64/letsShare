import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import Header from '../../../../../components/GeneralComponents/Header';
import CityToCityRideFormArea from '../../../../../components/ScreensMainComponents/RideShareComponents/CityToCityRideFormArea';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
        <Header navigation={navigation} hasBackIcon title="City to City Ride" />
        <ScrollViewContainer>
          <CityToCityRideFormArea navigation={navigation} Data={route.params.item}/>
        </ScrollViewContainer>
    </Container>
  );
};

export default Component;
