import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts
import {
  ShareActionAreaHeadingText,
  SectionHeadingText,
  ButtonTextLightGrey,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer';
import {AddAssetButton} from 'res/UniversalComponents/Button';

import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import ShareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import Choose from 'res/images/ModulesImages/GeneralImages/noData.png';

import {doGet} from '../../../../../utils/AxiosMethods';

import {addRideDummyData} from 'res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [addedRides, setAddedRides] = useState(null);

  const [data, setData] = useState(addRideDummyData);
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    doGet('v1/userRides/getUserRides');
  }, [addedRides]);

  useEffect(() => {
    renderItems;
  }, [addButton]);

  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item.id, item.selected)}
            selected={item.selected}
            iconName="car-outline"
            title={item.rideName}
            assetName={item.rideName}
          />
        </View>
      );
    });
  };

  const selectItem = (selectedId, selection) => {
    const newData = [
      ...data.map((item) => {
        if (selectedId === item.id) {
          if (selection === true) {
            setView(false);
            return {
              ...item,
              selected: false,
            };
          } else {
            setView(true);
            setItem(item);
            return {
              ...item,
              selected: true,
            };
          }
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      }),
    ];
    setData(newData);
  };

  const addButton = () => {
    return (
      <AddAssetButton
        onPress={(DATA) => navigation.navigate('AddRideScreen')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };

  return (
    <>
      {view ? (
        <View style={styles.selectRideArea}>
          <View style={styles.selectRideTitleText}>
            <ShareActionAreaHeadingText>Select Ride</ShareActionAreaHeadingText>
          </View>
          <View style={styles.mainContainer}>
            <HorizontalScrollViewContainer>
              <View style={styles.itemContainer}>
                {renderItems()}
                {addButton()}
              </View>
            </HorizontalScrollViewContainer>
          </View>

          <View style={styles.selectRideTypeArea}>
            <View style={styles.selectRideTypeText}>
              <SectionHeadingText>Select Ride Type</SectionHeadingText>
            </View>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() =>
                navigation.navigate('NearbyRideScreen', {item: item})
              }>
              Nearby Ride
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() =>
                navigation.navigate('CityToCityRideScreen', {item: item})
              }>
              City to City
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() =>
                navigation.navigate('TourRideScreen', {item: item})
              }>
              Tour Ride
            </CategoryOutlinedButton>
          </View>

          <View style={styles.pngImageArea}>
            <Image
              resizeMode="contain"
              source={ShareRide}
              style={styles.imageContainer}
            />
          </View>
        </View>
      ) : (
        <View style={styles.selectRideArea}>
          <View style={styles.selectRideTitleText}>
            <ShareActionAreaHeadingText>Select Ride</ShareActionAreaHeadingText>
          </View>
          <View style={styles.scrollViewContainer}>
            <HorizontalScrollViewContainer>
              <View style={styles.itemContainer}>
                {renderItems()}
                {addButton()}
              </View>
            </HorizontalScrollViewContainer>
          </View>

          <View style={styles.pngImageArea}>
            <Image
              resizeMode="contain"
              source={Choose}
              style={styles.imageContainer}
            />
          </View>
          <View style={styles.rideNotSelectedText}>
            <ButtonTextLightGrey>
              You have not selected any ride
            </ButtonTextLightGrey>
          </View>
        </View>
      )}
    </>
  );
};

export default Component;
