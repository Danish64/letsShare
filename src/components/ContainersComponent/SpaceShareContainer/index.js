import React from 'react';
import {
  ShareSpaceActionArea,
  RecentlySharedSpaces,
  RecommendedSpaces,
} from '../../ScreensMainComponents/SpaceShareComponents';
import {HeadingText} from 'res/UniversalComponents/Text.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <ShareSpaceActionArea />
      <RecentlySharedSpaces />
      <RecommendedSpaces />
    </ScrollViewContainer>
  );
};

export default Component;
