import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailGoodsList from '../../../../components/ScreensMainComponents/GoodsShareComponents/AvailGoodsList';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Avail Goods" hasBackIcon navigation={navigation}/>
            <AvailGoodsList navigation={navigation}/>
        </Container>
    );
};

export default Component;