import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';

import Header from '../../../../components/GeneralComponents/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BookRideForm from '../../../../components/ScreensMainComponents/RideShareComponents/BookRideForm';
import {ScrollView} from 'react-native-gesture-handler';

const Component = ({navigation, route}) => {
  return (
    <ScrollViewContainer>
      <Header title="Book Ride" hasBackIcon navigation={navigation} />
      <BookRideForm navigation={navigation} data={route.params.data} />
    </ScrollViewContainer>
  );
};

export default Component;
