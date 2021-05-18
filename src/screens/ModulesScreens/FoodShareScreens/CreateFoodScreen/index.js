import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

import {ScrollView, View, Text} from 'react-native';

import CreateFoodContainer from '../../../../components/ContainersComponent/FoodShareContainer/CreateFoodContainer';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header hasBackIcon title="Share Food" navigation={navigation} />
      <ScrollViewContainer>
        <CreateFoodContainer navigation={navigation} />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
