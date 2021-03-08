import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailFoodList from '../../../../components/ScreensMainComponents/FoodShareComponents/AvailFoodList';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Avail Food" hasBackIcon navigation={navigation}/>
            <AvailFoodList navigation={navigation}/>
        </Container>
    );
};

export default Component;