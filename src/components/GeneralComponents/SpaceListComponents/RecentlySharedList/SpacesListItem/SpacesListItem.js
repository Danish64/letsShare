import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text.js';
import DummyImage from 'res/images/DummyImages/testImage.jpg';
import {TextIcon, Icon} from 'res/UniversalComponents/TextIcon.js';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ShareButton} from 'res/UniversalComponents/Button';

import {colors} from 'react-native-elements';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({id, item, onPress}) => {
  return (
    <TouchableOpacity key={id} onPress={onPress}>
      <View style={styles.shareItemContainer}>
        <View style={styles.subContainer1}>
          <View style={styles.imageContainer}>
            {item.spacePictures && (
              <Image
                source={
                  item.spacePictures.length > 0
                    ? {uri: item.spacePictures[0]}
                    : require('../../../../../res/images/ModulesImages/SpaceSharingImages/spaceShare.png')
                }
                style={styles.image}
              />
            )}
          </View>
        </View>

        <View style={styles.descriptionStyle}>
          <View style={styles.titleContainer}>
            {item.spaceType && (
              <RecentlySharedTitleText numberOfLines={1}>
                {item.spaceType}
              </RecentlySharedTitleText>
            )}
          </View>
          <View style={styles.alignCenter}>
            {item.spaceSpecifications && (
              <TextIcon flexDirection="row">
                {item.spaceSpecifications}
              </TextIcon>
            )}
          </View>

          <View style={styles.subtitleContainer}>
            <View style={styles.separator} />

            {item.bedFare && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {item.bedFare}
              </TextIcon>
            )}
            {item.roomFare && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {item.roomFare}
              </TextIcon>
            )}

            {item.quantity && (
              <TextIcon flexDirection="column" iconName={'basket-outline'}>
                {item.quantity}
              </TextIcon>
            )}

            <View style={styles.separator} />
          </View>
          <View style={styles.locationStyle}>
            {item.spaceLocation && (
              <TextIcon flexDirection="row" iconName={'location-outline'}>
                {item.spaceLocation.address}
              </TextIcon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
