import React from 'react';
import {
  ShareYourAssets,
  Favourited,
  NearbyShares,
  RecommendedShares,
} from '../../ScreensMainComponents/HomeComponents';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = (navigation) => {
  return (
    <ScrollViewContainer>
      <ShareYourAssets navigation={navigation} />
      <NearbyShares navigation={navigation} />
      <RecommendedShares navigation={navigation} />
    </ScrollViewContainer>
  );
};

export default Component;
