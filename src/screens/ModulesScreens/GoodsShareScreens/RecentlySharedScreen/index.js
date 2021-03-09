import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import ScrollViewContainer from '../../../../res/UniversalComponents/ScrollViewContainer';
import Header from '../../../../components/GeneralComponents/Header';
import RecentlySharedItem from '../../../../components/ContainersComponent/GoodsShareContainer/RecentlySharedContainer';

const Component = ({navigation, route}) => {
    return(
        <Container>
            <Header title="Goods" hasBackIcon navigation={navigation}/>
                <RecentlySharedItem navigation={navigation} data={route.params.item}/>
            {/* <Text>itemId: {JSON.stringify(data)}</Text> */}
        </Container>
    );
};

export default Component;