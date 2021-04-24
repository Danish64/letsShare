import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import ScrollViewContainer from '../../../../res/UniversalComponents/ScrollViewContainer';
import Header from '../../../../components/GeneralComponents/Header';
import RecentlySharedItem from '../../../../components/ScreensMainComponents/RideShareComponents/RecentlySharedItem';

const Component = ({navigation, route}) => {
  return (
    <Container>
      <Header title="Ride" hasBackIcon navigation={navigation} />
      <ScrollViewContainer>
        <RecentlySharedItem navigation={navigation} data={route.params.item} />
      </ScrollViewContainer>
      {/* <Text>itemId: {JSON.stringify(data)}</Text> */}
    </Container>
  );
};

export default Component;
