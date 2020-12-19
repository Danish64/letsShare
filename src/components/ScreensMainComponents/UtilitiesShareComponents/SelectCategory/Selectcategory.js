import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  BodyTextBlack,
  BodyTextBold,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import HomeMenuIcon from '../../../Icons/HomeMenuIcon';
import utilities from 'res/images/ModulesImages/GeneralImages/utilities.png';
//Native Exports Ends Here

const Component = ({navigation}) => {

  
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
  }) => {
    return (
      <View style={styles.shareAssetRowContainer}>
        {/* <View style={styles.shareAssetTitleText}>
        <SectionHeadingText>Share your assets</SectionHeadingText>
      </View> */}
        <ShareAssetCard
          iconName={firstCardIconName}
          cardTitle={firstCardTitle}
          onPress={() => navigation.navigate('GoodsShareStack')}
        />
        <ShareAssetCard
          iconName={secondCardIconName}
          cardTitle={secondCardTitle}
          onPress={() => navigation.navigate('FoodShareStack')}
        />
      </View>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareAssetComponentArea}>
      <View style={styles.shareAssetTitleText}>
        <SectionHeadingText>Share Utilities</SectionHeadingText>
      </View>
      <ShareAssetRow
        firstCardTitle="Share Goods"
        firstCardIconName="cart-outline"
        secondCardTitle="Share Food"
        secondCardIconName="fast-food-outline"
      />
      <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={utilities}
            style={styles.imageContainer}
          />
        </View>
    </View>
  );
};

export default Component;
