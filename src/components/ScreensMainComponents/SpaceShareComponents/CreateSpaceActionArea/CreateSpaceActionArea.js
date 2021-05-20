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
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

import LoadingIndicator from '../../../GeneralComponents/LoadingIndicator';

import {
  CategoryOutlinedButton,
  PrimaryButton,
  AddAssetButton,
  SelectRideButton,
  OutlinedActionIconButton,
} from 'res/UniversalComponents/Button.js';

import styles from './style';
import SelectSpace from 'res/images/ModulesImages/SpaceSharingImages/selectHome.png';
import Choose from 'res/images/ModulesImages/GeneralImages/noData.png';
import {useIsFocused} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

//Third Party Exports Ends

const Component = () => {
  const navigation = useNavigation();

  const state = useSelector((state) => state);
  const ownerId = state.userInformation.user._id;
  const userId = state.userInformation.user._id;
  const sharerId = state.userInformation.user._id;
  // console.log(userId);

  const [selectSpaceData, setSelectSpaceData] = useState();
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  const getSpaces = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userRides/getUserRides', data);
    const spaces = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setSelectSpaceData(spaces);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getSpaces();
    renderItems();
    setView(false);
  }, [isFocused]);

  const renderItems = () => {
    return selectSpaceData?.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item._id, item.selected)}
            selected={item.selected}
            iconName="home-outline"
            // assetName={item.rideName}
            assetName="Space Name"
          />
        </View>
      );
    });
  };

  const selectItem = (selectedId, selection) => {
    const newData = [
      ...selectSpaceData.map((item) => {
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
    setSelectSpaceData(newData);
  };

  const addButton = () => {
    return (
      <AddAssetButton
        onPress={(DATA) => navigation.navigate('AddSpace')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };

  if (!selectSpaceData) {
    return <LoadingIndicator />;
  }
  return (
    <>
      {view ? (
        <ScrollViewContainer>
          <View style={styles.selectSpaceArea}>
            <View style={styles.selectSpaceTitleText}>
              <ShareActionAreaHeadingText>
                Select Space
              </ShareActionAreaHeadingText>
            </View>
            <View style={styles.mainContainer}>
              <HorizontalScrollViewContainer>
                <View style={styles.itemContainer}>
                  {renderItems()}
                  {addButton()}
                </View>
              </HorizontalScrollViewContainer>
            </View>

            <View style={styles.selectSpaceTypeArea}>
              <View style={styles.selectSpaceTypeText}>
                <SectionHeadingText>Select Space Category</SectionHeadingText>
              </View>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('ShareLivingSpace', {item: item})
                }>
                Share Living Space
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('ShareWorkingSpace', {item: item})
                }>
                Share Working Space
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('ShareEventSpace', {item: item})
                }>
                Share Event Space
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('ShareParkingSpace', {item: item})
                }>
                Share Parking Space
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('ShareStorageSpace', {item: item})
                }>
                Share Storage Space
              </CategoryOutlinedButton>
            </View>

            <View style={styles.pngImageArea}>
              <Image
                resizeMode="contain"
                source={SelectSpace}
                style={styles.imageContainer}
              />
            </View>
          </View>
        </ScrollViewContainer>
      ) : (
        <View style={styles.selectSpaceArea}>
          <View style={styles.mySharedSpaces}>
            <OutlinedActionIconButton
              iconName="md-pencil"
              onPress={() => navigation.navigate('SharedSpaces')}>
              My Shared Spaces
            </OutlinedActionIconButton>
          </View>

          <View style={styles.selectSpaceTitleText}>
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
          <View style={styles.spaceNotSelectedText}>
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
