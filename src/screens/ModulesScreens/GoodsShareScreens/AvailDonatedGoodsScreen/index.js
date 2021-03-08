import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailDonatedGoodsList from '../../../../components/ScreensMainComponents/GoodsShareComponents/AvailDonatedGoodsList';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Avail Donated Goods" hasBackIcon navigation={navigation}/>
            <AvailDonatedGoodsList navigation={navigation} />
        </Container>
    );
};

export default Component;