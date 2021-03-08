import React from 'react';
import {View, Text} from 'react-native';
import VerticalFlatList from '../../../GeneralComponents/VerticalFlatList';
import {SellGoods} from '../../../../res/constants/dummyData';

const Component = ({navigation}) => {
    return(
        <View>
           <VerticalFlatList data={SellGoods} navigation={navigation} screen='RecentlySharedScreen'/>
        </View>
    )
}
export default Component;