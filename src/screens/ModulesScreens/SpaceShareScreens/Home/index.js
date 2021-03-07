import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import SpaceShareHome from '../../../../components/ContainersComponent/SpaceShareContainer';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header
        title="space share"
        isSearchAble
        navigation={navigation}
        // navigateTo="HomeSearchScreen"
      />
      <SpaceShareHome navigation={navigation} />
    </Container>
  );
};

export default Component;
