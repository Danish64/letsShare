import React from 'react';
import {Text} from 'react-native';
import ScrollViewContainer from '../../../../res/UniversalComponents/ScrollViewContainer';
import RecentlySharedItem from '../../../ScreensMainComponents/GoodsShareComponents/RecentlySharedItem';

const Component = ({navigation, data}) => {
    return(
        <ScrollViewContainer>
            <RecentlySharedItem navigation={navigation} data={data}/>
            {/* <Text>itemId: {JSON.stringify(data)}</Text> */}
        </ScrollViewContainer>
    );
};

export default Component;