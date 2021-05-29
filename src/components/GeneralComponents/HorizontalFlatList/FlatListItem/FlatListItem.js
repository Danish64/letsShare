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
import {ShareButton} from '../../../../res/UniversalComponents/Button';
import TestCaseImage from 'res/images/ModulesImages/GeneralImages/newEntry.png';
import RideImage from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import FoodImage from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import {useIsFocused} from '@react-navigation/native';

import {colors} from 'react-native-elements';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({id, item, onPress}) => {
  const isFocused = useIsFocused();

  const [fareType, setFareType] = useState(null);
  const getFareMethod = () => {
    if (item.fareMethod == 'chargePerKm') {
      setFareType(' /Km');
    }
    if (item.fareMethod == 'chargePerHour') {
      setFareType(' /hour');
    }
    if (item.fareMethod == 'chargePerDP') {
      setFareType('');
    }
  };
  useEffect(() => {
    getFareMethod();
  }, [isFocused]);
  return (
    <TouchableOpacity key={id} onPress={onPress}>
      <View style={styles.shareItemContainer}>
        <View style={styles.subContainer1}>
          <View style={styles.imageContainer}>
            {item.ridePictures && (
              <Image
                source={
                  item.ridePictures.length > 0
                    ? {uri: item.ridePictures[0]}
                    : require('../../../../res/images/ModulesImages/RideSharingImages/ShareRide.png')
                }
                style={styles.image}
              />
            )}

            {item.images && (
              <Image
                source={
                  item.images.length > 0
                    ? {uri: item.images[0]}
                    : require('../../../../res/images/ModulesImages/GoodsSharingImages/shareGoods.png')
                }
                style={styles.image}
              />
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
                {'Rs ' + item.fare}
              </TextIcon>
            )}
            {item.fareRate && (
              <TextIcon flexDirection="column" iconName={'cash-outline'}>
                {'Rs ' + item.fareRate + fareType}
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
