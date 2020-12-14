import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import {
    ShareGoodsActionArea,
    RecentlySharedGoodsArea,
    AvailGoodsArea
} from '../../ScreensMainComponents/GoodsShareComponents';

const Component = (props) => {
    return(
        <ScrollViewContainer>
            <ShareGoodsActionArea/>
            <RecentlySharedGoodsArea/>
            <AvailGoodsArea/>
        </ScrollViewContainer>
    );
}

export default Component;