import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailDonatedFoodList from '../../../../components/ScreensMainComponents/FoodShareComponents/AvailDonatedFoodList';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Avail Donated Food" hasBackIcon navigation={navigation}/>
            <AvailDonatedFoodList navigation={navigation} />
        </Container>
    );
};

export default Component;