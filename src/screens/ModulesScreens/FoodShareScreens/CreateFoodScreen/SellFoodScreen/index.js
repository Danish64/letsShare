import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

import SellFoodFormArea from '../../../../../components/ScreensMainComponents/FoodShareComponents/SellFoodFormArea';
import {ScrollView, View, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header hasBackIcon title="Sell Food" navigation={navigation} />
      <ScrollViewContainer>
        <SellFoodFormArea navigation={navigation} Data={route.params.item} />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
