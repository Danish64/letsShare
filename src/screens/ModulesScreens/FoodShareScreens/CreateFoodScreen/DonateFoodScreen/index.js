import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

import DonateFoodFormArea from '../../../../../components/ScreensMainComponents/FoodShareComponents/DonateFoodFormArea';
import {ScrollView, View, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  return (
    <Container>
      <Header hasBackIcon title="Donate Food" navigation={navigation} />
      <ScrollViewContainer>
        <DonateFoodFormArea navigation={navigation} Data={route.params.item} />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
