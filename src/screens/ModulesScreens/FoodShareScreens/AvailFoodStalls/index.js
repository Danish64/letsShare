import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
// import AvailFoodStallList from '../../../../components/ScreensMainComponents/FoodStallShareComponents/AvailFoodStallList';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Avail FoodStall" hasBackIcon navigation={navigation}/>
            {/* <AvailFoodStallList navigation={navigation}/> */}
        </Container>
    );
};

export default Component;