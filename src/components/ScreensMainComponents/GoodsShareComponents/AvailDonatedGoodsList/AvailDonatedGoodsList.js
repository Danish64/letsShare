import React from 'react';
import {View, Text} from 'react-native';
import VerticalFlatList from '../../../GeneralComponents/VerticalFlatList';
import {Goods} from '../../../../res/constants/dummyData';

const Component = ({navigation}) => {
    return(
        <View>
            <VerticalFlatList data={Goods} navigation={navigation} screen='RecentlySharedScreen'/>
        </View>
    )
}
export default Component;