import React from 'react';
import {
  ShareSpaceActionArea,
  RecentlySharedSpaces,
  RecommendedSpaces,
  AvailSpacesArea,
} from '../../ScreensMainComponents/SpaceShareComponents';
import {HeadingText} from 'res/UniversalComponents/Text.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <ShareSpaceActionArea navigation={navigation} />
      <RecentlySharedSpaces navigation={navigation} />
      <AvailSpacesArea navigation={navigation} />

      {/* <RecommendedSpaces navigation={navigation} /> */}
    </ScrollViewContainer>
  );
};

export default Component;
