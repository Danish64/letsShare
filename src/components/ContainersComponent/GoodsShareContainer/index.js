import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import {
  ShareGoodsActionArea,
  RecentlySharedGoodsArea,
  AvailGoodsArea,
} from '../../ScreensMainComponents/GoodsShareComponents';

const Component = ({navigation}) => {
  return (
    <ScrollViewContainer>
      <ShareGoodsActionArea navigation={navigation} />
      <RecentlySharedGoodsArea navigation={navigation} />
      <AvailGoodsArea navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
