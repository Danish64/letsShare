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

const Component = () => {

  
  const CardTitle = ({title}) => {
    return (
      <View style={styles.cardTitle}>
        <BodyTextBold>{title}</BodyTextBold>
      </View>
    );
  };
  const ShareAssetCard = ({iconName, cardTitle}) => {
    return (
      <TouchableOpacity
        onPress={() => console.log(`${cardTitle} Pressed`)}
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
  }) => {
    return (
      <View style={styles.shareAssetRowContainer}>
        <ShareAssetCard
          iconName={firstCardIconName}
          cardTitle={firstCardTitle}
        />
        <ShareAssetCard
          iconName={secondCardIconName}
          cardTitle={secondCardTitle}
        />
      </View>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareAssetComponentArea}>
      {/* <View style={styles.shareAssetTitleText}>
        <SectionHeadingText>Share Utilities</SectionHeadingText>
      </View> */}
      <ShareAssetRow
        firstCardTitle="Share Goods"
        firstCardIconName="cart-outline"
        secondCardTitle="Share Food"
        secondCardIconName="fast-food-outline"
      />
    </View>
  );
};

export default Component;
