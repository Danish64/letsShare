import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import {
    ShareFoodActionArea,
    RecentlySharedFoodsArea,
    AvailFoodArea
} from '../../ScreensMainComponents/FoodShareComponents';

const Component = (props) => {
    return(
        <ScrollViewContainer>
            <ShareFoodActionArea/>
            <RecentlySharedFoodsArea/>
            <AvailFoodArea/>
        </ScrollViewContainer>
    );
}

export default Component;