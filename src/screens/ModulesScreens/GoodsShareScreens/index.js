import React from 'react';
import Container from 'res/UniversalComponents/Container.js';

import Header from '../../../components/GeneralComponents/Header';
import GoodsShareHome from '../../../components/ContainersComponent/GoodsShareContainer';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  return (
    <Container>
      <Header  title= "Goods Sharing" navigation={navigation} navigateTo="HomeSearchScreen" />
      <GoodsShareHome/>
    </Container>
  );
};

export default Component;
