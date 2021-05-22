import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import NearbyRideFareFormContinue from '../../../../../components/ScreensMainComponents/RideShareComponents/NearbyRideFareFormContinue';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  return (
    <Container>
      <Header navigation={navigation} hasBackIcon title="Nearby Ride" />
      <ScrollViewContainer>
        <NearbyRideFareFormContinue
          navigation={navigation}
          Data={route.params.rideDetail}
        />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
