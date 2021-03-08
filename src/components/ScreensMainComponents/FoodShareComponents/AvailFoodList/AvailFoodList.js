import React from 'react';
import {View, Text} from 'react-native';
import VerticalFlatList from '../../../GeneralComponents/VerticalFlatList';
import {SellFood} from '../../../../res/constants/dummyData';

const Component = ({navigation}) => {
    return(
        <View>
           <VerticalFlatList data={SellFood} navigation={navigation} screen='RecentlySharedScreen'/>
        </View>
    )
}
export default Component;