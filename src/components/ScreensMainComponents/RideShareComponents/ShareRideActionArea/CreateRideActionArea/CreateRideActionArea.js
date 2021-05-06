import React, {useEffect, useRef, useState} from 'react';
import {View, Image, TouchableOpacity, Text, Button} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts
import {
  ShareActionAreaHeadingText,
  SectionHeadingText,
  ButtonTextLightGrey,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer';
import LoadingIndicator from '../../../../GeneralComponents/LoadingIndicator';

import {
  CategoryOutlinedButton,
  PrimaryButton,
  AddAssetButton,
  SelectRideButton,
} from 'res/UniversalComponents/Button.js';

import styles from './style';
import ShareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import Choose from 'res/images/ModulesImages/GeneralImages/noData.png';
import {useIsFocused} from '@react-navigation/native';
import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
} from '../../../../../utils/AxiosMethods';

import {useSelector} from 'react-redux';

//Third Party Exports Ends

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const ownerId = state.userInformation.user._id;
  const userId = state.userInformation.user._id;
  const sharerId = state.userInformation.user._id;
  // console.log(userId);

  const [data, setData] = useState();
  const [userAllRides, setUserAllRides] = useState();
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  const getRides = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userRides/getUserRides', data);
    const rides = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setData(rides);
  };

  const getUserAllRides = async () => {
    const data = {
      sharerId: sharerId,
    };
    const result = await doPost('v1/userRideShares', data);
    const allSharedRides = result.data.map((item, index) => {
      item.key = index;
      return item;
    });
    setUserAllRides(allSharedRides);
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    getRides();
    renderItems();
    getUserAllRides();
  }, [addButton, isFocused]);

  const renderItems = () => {
    return data?.map((item, index) => {
      return (
        <View key={index}>
          <SelectRideButton
            onPress={() => selectItem(item._id, item.selected)}
            selected={item.selected}
            iconName={item.rideType}
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
        if (selectedId === item._id) {
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

  if (!data) {
    return <LoadingIndicator />;
  }
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
              Share Nearby Ride
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() =>
                navigation.navigate('CityToCityRideScreen', {item: item})
              }>
              Share City to City
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() =>
                navigation.navigate('TourRideScreen', {item: item})
              }>
              Share Tour Ride
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
          <View style={styles.mySharedRides}>
            <PrimaryButton
              onPress={() =>
                navigation.navigate('SharedRidesScreen', {data: userAllRides})
              }>
              My Shared Rides
            </PrimaryButton>
          </View>

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
