import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import DonateGoodsFormContainer from '../../../../../components/ContainersComponent/GoodsShareContainer/CreateGoodsContainer/DonateGoodsFormContainer';
import {ScrollView, View, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  return (
    <Container>
      <Header hasBackIcon title="Donate Goods"  navigation={navigation}/>
      <DonateGoodsFormContainer navigation={navigation} data={route.params.item}/>
      {/* <Text>{JSON.stringify(route.params.item)}</Text>            */}

    </Container>
  );
};

export default Component;
