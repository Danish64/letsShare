import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import DonateGoodsFormContainer from '../../../../../components/ContainersComponent/GoodsShareContainer/CreateGoodsContainer/DonateGoodsFormContainer';
import {ScrollView, View, Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, route}) => {
  const [data, setData] = useState({});

    useEffect(() =>{
        let { item } = route.params;

        setData(item)
    })
  return (
    <Container>
      <Header hasBackIcon title="Donate Goods"  navigation={navigation}/>
      <DonateGoodsFormContainer navigation={navigation} data={data}/>
      {/* <Text>{JSON.stringify(data)}</Text>            */}

    </Container>
  );
};

export default Component;
