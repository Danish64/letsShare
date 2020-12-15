import React from 'react';
import Container from 'res/UniversalComponents/Container.js';

//Native Exports Ends Here

//Third Party Exports Starts
import Header from '../../../components/GeneralComponents/Header';
import UtilitiesShareContainer from '../../../components/ContainersComponent/UtilitiesShareContainer';
//Third Party Exports Ends

import GoodsShareHome from '../../../components/ContainersComponent/GoodsShareContainer';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Utilities Sharing" navigation={navigation} navigateTo="HomeSearchScreen"></Header>
      <UtilitiesShareContainer navigation={navigation}/>
    </Container>
  );
};

export default Component;
