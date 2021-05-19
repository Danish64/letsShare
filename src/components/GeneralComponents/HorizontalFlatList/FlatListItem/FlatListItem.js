import React from 'react';
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
import {ShareButton} from '../../../../res/UniversalComponents/Button';
import TestCaseImage from 'res/images/ModulesImages/GeneralImages/newEntry.png';
import RideImage from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import FoodImage from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';

import {colors} from 'react-native-elements';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({id, item, onPress}) => {
  //to use styles -> {styles.propertyName}
  return (
    <TouchableOpacity key={id} onPress={onPress}>
      <View style={styles.shareItemContainer}>
        <View style={styles.subContainer1}>
          <View style={styles.imageContainer}>
            {item.rideCategory && (
              <Image source={RideImage} style={styles.image} />
            )}
            {item.shareType && (
              <Image source={FoodImage} style={styles.image} />
            )}
          </View>
        </View>

        <View style={styles.descriptionStyle}>
          <View style={styles.titleContainer}>
            {item.rideCategory ? (
              <RecentlySharedTitleText numberOfLines={1}>
                {item.rideCategory}
              </RecentlySharedTitleText>
            ) : (
              <RecentlySharedTitleText numberOfLines={1}>
                {item.title}
              </RecentlySharedTitleText>
            )}

            {item.rideType && (
              <RecentlySharedTitleText numberOfLines={1}>
                {' ' + item.rideType}
              </RecentlySharedTitleText>
            )}
          </View>
          <View style={styles.alignCenter}>
            {item.description && (
              <TextIcon flexDirection="row">{item.description}</TextIcon>
            )}
          </View>

          <View style={styles.subtitleContainer}>
            <View style={styles.separator} />

            {item.price && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {item.price}
              </TextIcon>
            )}
            {item.fare && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {item.fare}Rs
              </TextIcon>
            )}
            {item.quantity && (
              <TextIcon flexDirection="column" iconName={'basket-outline'}>
                {item.quantity}
              </TextIcon>
            )}
            {item.seatsAvailable && (
              <TextIcon flexDirection="column" iconName={'people-outline'}>
                {item.seatsAvailable}
              </TextIcon>
            )}

            <View style={styles.separator} />
          </View>
          <View style={styles.locationStyle}>
            {item.startLocation && (
              <TextIcon flexDirection="row">
                {item.startLocation.address}
              </TextIcon>
            )}
            {item.destinationLocation && (
              <TextIcon iconName={'pin-outline'} flexDirection="column">
                {item.destinationLocation.address}
              </TextIcon>
            )}
            {item.pickUpLocation && (
              <TextIcon flexDirection="row" iconName={'location-outline'}>
                {item.pickUpLocation.address}
              </TextIcon>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
