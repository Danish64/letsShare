import React from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AvailSpaceDetail from '../../../../components/ScreensMainComponents/SpaceShareComponents/AvailSpaceDetail';

const Component = ({navigation, item}) => {
  const route = useRoute();
  const spaceType = route.params.item.spaceType;

  return (
    <Container>
      <Header title="Space Detail" navigation={navigation} hasBackIcon />
      <AvailSpaceDetail
        spaceType={spaceType}
        navigation={navigation}
        data={route.params.item}
      />
    </Container>
  );
};

export default Component;
