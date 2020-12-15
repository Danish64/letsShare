import React from 'react';
import Container from 'res/UniversalComponents/Container.js';

//Native Exports Ends Here

//Third Party Exports Starts
import Header from '../../../components/GeneralComponents/Header';
import UtilitiesShareContainer from '../../../components/ContainersComponent/UtilitiesShareContainer';
//Third Party Exports Ends

const Component = ({navigation}) => {
  return (
    <Container>
      <Header title="Utilities Sharing" navigation={navigation} navigateTo="HomeSearchScreen"></Header>
      <UtilitiesShareContainer/>
    </Container>
  );
};

export default Component;
