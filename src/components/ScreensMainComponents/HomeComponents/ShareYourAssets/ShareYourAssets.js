import React from 'react';
import {View, Text} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  SubtitleTextBlack,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import HomeMenuIcon from '../../../Icons/HomeMenuIcon';
//Native Exports Ends Here

const Component = () => {
  const ShareAssetCard = ({iconName}) => {
    return (
      <View style={styles.shareAssetCardContainer}>
        <HomeMenuIcon name={iconName} />
      </View>
    );
  };
  const ShareAssetRow = ({firstCardIconName, secondCardIconName}) => {
    return (
      <View style={styles.shareAssetRowContainer}>
        <ShareAssetCard iconName={firstCardIconName} />
        <ShareAssetCard iconName={secondCardIconName} />
      </View>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareAssetComponentArea}>
      <SubtitleTextBlack>Share Your Asset</SubtitleTextBlack>
      <ShareAssetRow
        firstCardIconName="ios-business-outline"
        secondCardIconName="car-outline"
      />
      <ShareAssetRow
        firstCardIconName="cart-outline"
        secondCardIconName="fast-food-outline"
      />
    </View>
  );
};

export default Component;
