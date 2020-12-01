import React from 'react';
import {
  ShareYourAssets,
  Favourited,
  NearbyShares,
  RecommendedShares,
} from '../../ScreensMainComponents/HomeComponents';
import {ScrollView, View, Text} from 'react-native';
import styles from 'res/styles/index.styles.js';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = (props) => {
  return (
    <ScrollViewContainer>
      <ShareYourAssets />
    </ScrollViewContainer>
  );
};

export default Component;
