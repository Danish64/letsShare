import React from 'react';
import {
  ShareYourAssets,
  Favourited,
  NearbyShares,
  RecommendedShares,
} from '../../ScreensMainComponents/HomeComponents';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = (props) => {
  return (
    <ScrollViewContainer>
      <ShareYourAssets />
      <NearbyShares />
      <RecommendedShares />
    </ScrollViewContainer>
  );
};

export default Component;
