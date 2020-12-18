import React from 'react';
import Container from 'res/UniversalComponents/Container.js';

import RideShareHome from '../../../components/ContainersComponent/RideShareContainer';
import Header from '../../../components/GeneralComponents/Header';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header
        title="Ride Sharing"
        navigation={navigation}
        navigateTo="HomeSearchScreen"
        isSearchable
      />
      <RideShareHome navigation={navigation} />
    </Container>
  );
};

export default Component;
