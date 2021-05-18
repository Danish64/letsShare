import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailFoodDetail from '../../../../components/ScreensMainComponents/FoodShareComponents/AvailFoodDetail';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Component = ({navigation, item}) => {
  const route = useRoute();
  const listFor = route.params.item.shareType;
  console.log(listFor);

  return (
    <Container>
      <Header title="Food Detail" hasBackIcon navigation={navigation} />
      <AvailFoodDetail
        listFor={listFor}
        navigation={navigation}
        data={route.params.item}
      />
    </Container>
  );
};

export default Component;
