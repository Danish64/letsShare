import React from 'react';
import Container from 'res/UniversalComponents/Container.js';

import RideShareHome from '../../../components/ContainersComponent/RideShareContainer';
import Header from '../../../components/GeneralComponents/Header';


//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  return (
    
    <Container> 
      <Header  title= "Ride Sharing" navigation={navigation} navigateTo="HomeSearchScreen" />
      <RideShareHome/>
    </Container>
    
    
 

  );
};

export default Component;
