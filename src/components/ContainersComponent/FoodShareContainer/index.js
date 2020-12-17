import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import {
    ShareFoodActionArea,
    RecentlySharedFoodsArea,
    AvailFoodArea
} from '../../ScreensMainComponents/FoodShareComponents';

const Component = ({navigation}) => {
    return(
        <ScrollViewContainer>
            <ShareFoodActionArea navigation={navigation}/>
            <RecentlySharedFoodsArea navigation={navigation}/>
            <AvailFoodArea navigation={navigation}/>
        </ScrollViewContainer>
    );
}

export default Component;