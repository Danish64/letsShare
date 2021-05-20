import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import {useNavigation, useRoute} from '@react-navigation/native';

import Header from '../../../../components/GeneralComponents/Header';


const Component = ({navigation}) => {
  const route = useRoute();

  return (
    <Container>
      <Header title="My Shared Goods" hasBackIcon navigation={navigation} />
      {/* <SharedGoodsList navigation={navigation} data={route.params.data} /> */}
    </Container>
  );
};

export default Component;
