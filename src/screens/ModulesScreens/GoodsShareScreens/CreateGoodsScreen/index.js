import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import CreateGoodsContainer from '../../../../components/ContainersComponent/GoodsShareContainer/CreateGoodsContainer';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //  console.log('RideShareScreen', navigation);
  // const [data, setData] = useState({});

  //   useEffect(() =>{
  //       let { newData } = route.params;

  //       setData(newData)
  //   })
  return (
    <Container>
      <Header title="Share Goods" hasBackIcon navigation={navigation}/>
      <CreateGoodsContainer navigation={navigation}/>
    </Container>
  );
};

export default Component;
