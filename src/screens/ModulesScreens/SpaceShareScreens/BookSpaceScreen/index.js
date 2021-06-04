import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';

import Header from '../../../../components/GeneralComponents/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BookResidenceForm from '../../../../components/ScreensMainComponents/SpaceShareComponents/SpaceForms/BookSpaceForms/BookResidenceSpace';
import BookWorkingSpaceForm from '../../../../components/ScreensMainComponents/SpaceShareComponents/SpaceForms/BookSpaceForms/BookWorkingSpace';

import {ScrollView} from 'react-native-gesture-handler';

const Component = ({navigation, route, listFor}) => {
  const spaceType = route.params.listFor;
  console.log(spaceType);

  if (spaceType === 'Residence') {
    return (
      <Container>
        <Header title="Request Booking" hasBackIcon navigation={navigation} />
        <BookResidenceForm navigation={navigation} data={route.params.data} />
      </Container>
    );
  }

  if (spaceType === 'Working') {
    return (
      <Container>
        <Header title="Request Booking" hasBackIcon navigation={navigation} />
        <BookWorkingSpaceForm
          navigation={navigation}
          data={route.params.data}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Request Booking" hasBackIcon navigation={navigation} />
      <BookResidenceForm navigation={navigation} data={route.params.data} />
    </Container>
  );
};

export default Component;
