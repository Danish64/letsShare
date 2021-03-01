import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './style';
import ShareCard from '../../../GeneralComponents/ShareCard';

const Component = ({navigation, data}) => {
    return(
        <View>
            <ShareCard item={data}/>
            {/* <Text>itemId: {JSON.stringify(data)}</Text> */}
        </View>
    )
};

export default Component;