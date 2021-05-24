import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import GoodsRequestList from '../../../../components/GeneralComponents/GoodsListComponents/GoodsRequestList';
import {useNavigation, useRoute} from '@react-navigation/native';

const Component = ({navigation, item}) => {
  const route = useRoute();
  return (
    <Container>
      <Header title="Booking Requests" hasBackIcon navigation={navigation} />
      <GoodsRequestList navigation={navigation} data={route.params.item} />
    </Container>
  );
};

export default Component;
