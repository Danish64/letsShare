import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailDonatedFood from '../../../../components/ScreensMainComponents/FoodShareComponents/AvailDonatedFood';

const Component = ({navigation, route}) => {
  return (
    <Container>
      <Header title="Avail Donated Food" hasBackIcon navigation={navigation} />
      <AvailDonatedFood navigation={navigation} />
    </Container>
  );
};

export default Component;
