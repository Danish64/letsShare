import React from 'react';
import Container from 'res/UniversalComponents/Container.js';

import Header from '../../../components/GeneralComponents/Header';
import FoodShareHome from '../../../components/ContainersComponent/FoodShareContainer';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  return (
    <Container>
      <Header hasBackIcon title= "Food Sharing" navigation={navigation} navigateTo="HomeSearchScreen" />
      <FoodShareHome navigation={navigation}/>
    </Container>
  );
};

export default Component;
