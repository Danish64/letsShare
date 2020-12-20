import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import AddFoodFormContainer from '../../../../../components/ContainersComponent/FoodShareContainer/CreateFoodContainer/AddFoodFormContainer';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header hasBackIcon title="Add Food" navigation={navigation}/>
      <AddFoodFormContainer navigation={navigation} />
    </Container>
  );
};

export default Component;
