import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import SellGoodsFormContainer from '../../../../../components/ContainersComponent/GoodsShareContainer/CreateGoodsContainer/SellGoodsFormContainer';
import {ScrollView, View, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header hasBackIcon title="Sell Goods"  navigation={navigation}/>
      <SellGoodsFormContainer navigation={navigation} data={route.params.item}/>
    </Container>
  );
};

export default Component;

