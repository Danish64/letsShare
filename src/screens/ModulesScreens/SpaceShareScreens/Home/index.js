import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {
  ShareSpaceActionArea,
  RecentlySharedSpaces,
  RecommendedSpaces,
  AvailSpacesArea,
} from '../../../../components/ScreensMainComponents/SpaceShareComponents';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  return (
    <Container>
      <Header
        title="space share"
        // isSearchAble
        navigation={navigation}
        // navigateTo="HomeSearchScreen"
      />
      <ScrollViewContainer>
        <ShareSpaceActionArea navigation={navigation} />
        <RecentlySharedSpaces navigation={navigation} />
        <AvailSpacesArea navigation={navigation} />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
