import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  BodyTextBlack,
  BodyTextBold,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import HomeMenuIcon from '../../../Icons/HomeMenuIcon';
//Native Exports Ends Here

const Component = (navigation) => {
  const CardTitle = ({title}) => {
    return (
      <View style={styles.cardTitle}>
        <BodyTextBold>{title}</BodyTextBold>
      </View>
    );
  };
  const ShareAssetCard = ({iconName, cardTitle, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.shareAssetCardContainer}>
        <HomeMenuIcon name={iconName} />
        <CardTitle title={cardTitle} />
      </TouchableOpacity>
    );
  };
  const ShareAssetRow = ({
    firstCardIconName,
    secondCardIconName,
    firstCardTitle,
    secondCardTitle,
    firstCardOnPress,
    secondCardOnPress,
  }) => {
    return (
      <View style={styles.shareAssetRowContainer}>
        <ShareAssetCard
          iconName={firstCardIconName}
          cardTitle={firstCardTitle}
          onPress={firstCardOnPress}
        />
        <ShareAssetCard
          iconName={secondCardIconName}
          cardTitle={secondCardTitle}
          onPress={secondCardOnPress}
        />
      </View>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareAssetComponentArea}>
      <View style={styles.shareAssetTitleText}>
        <SectionHeadingText>Share your assets</SectionHeadingText>
      </View>
      <View style={styles.shareAssetActionArea}>
        <ShareAssetRow
          firstCardTitle="Share Space"
          firstCardIconName="ios-business-outline"
          secondCardTitle="Share Ride"
          secondCardIconName="car-outline"
          firstCardOnPress={() => {
            console.log('Share Space Pressed');
          }}
          secondCardOnPress={() => {
            console.log('Share Ride Pressed');
          }}
        />
        <ShareAssetRow
          firstCardTitle="Share Food"
          firstCardIconName="fast-food-outline"
          secondCardTitle="Share Goods"
          secondCardIconName="basket-outline"
          firstCardOnPress={() => {
            console.log('Share Food Pressed');
          }}
          secondCardOnPress={() => {
            console.log('Share Goods Pressed');
          }}
        />
      </View>
    </View>
  );
};

export default Component;
