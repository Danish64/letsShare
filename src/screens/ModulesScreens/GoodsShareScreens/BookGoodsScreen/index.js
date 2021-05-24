import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';

import Header from '../../../../components/GeneralComponents/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BookDonateGoodsForm from '../../../../components/ScreensMainComponents/GoodsShareComponents/BookDonateGoodsForm';
import BookSellGoodsForm from '../../../../components/ScreensMainComponents/GoodsShareComponents/BookSellGoodsForm';

import {ScrollView} from 'react-native-gesture-handler';

const Component = ({navigation, route, listFor}) => {
  const formCategory = route.params.listFor;

  if (formCategory === 'donate') {
    return (
      <ScrollViewContainer>
        <Header title="Request Booking" hasBackIcon navigation={navigation} />
        <BookDonateGoodsForm navigation={navigation} data={route.params.data} />
      </ScrollViewContainer>
    ); 
  }
  if (formCategory === 'sell') {
    return (
      <ScrollViewContainer>
        <Header title="Request Booking" hasBackIcon navigation={navigation} />
        <BookSellGoodsForm navigation={navigation} data={route.params.data} />
      </ScrollViewContainer>
    );
  }

};

export default Component;
