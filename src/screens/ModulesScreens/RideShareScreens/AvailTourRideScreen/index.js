import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailTourRide from '../../../../components/ScreensMainComponents/RideShareComponents/AvailTourRide';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Avail Rides" hasBackIcon navigation={navigation}/>
            <AvailTourRide navigation={navigation} />
        </Container>
    );
};

export default Component;