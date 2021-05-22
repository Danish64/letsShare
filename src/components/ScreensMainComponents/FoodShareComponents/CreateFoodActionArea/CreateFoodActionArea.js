import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {
  HeadingText,
  GroupLabelText,
  TextButton,
  ShareActionAreaHeadingText,
  SectionHeadingText,
  ButtonTextLightGrey,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer';
import LoadingIndicator from '../../../GeneralComponents/LoadingIndicator';

import {
  CategoryOutlinedButton,
  PrimaryButton,
  AddAssetButton,
  SelectRideButton,
  OutlinedActionIconButton,
} from 'res/UniversalComponents/Button.js';

import styles from './style';
import ShareFood from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import Choose from 'res/images/ModulesImages/GeneralImages/noData.png';

import {FoodList} from '../../../../res/constants/dummyData';

import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
} from '../../../../utils/AxiosMethods';

import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    getUserFoodData();
    renderItems();
    setView(false);
  }, [isFocused]);

  const state = useSelector((state) => state);
  const ownerId = state.userInformation.user._id;
  const userId = state.userInformation.user._id;
  console.log(userId);

  const [data, setData] = useState();
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  const getUserFoodData = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userFoods/getUserFoods', data);
    const rides = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setData(rides);
  };

  // Render Food
  const renderItems = () => {
    return data?.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item._id, item.selected)}
            selected={item.selected}
            iconName="fast-food-outline"
            title={item.title}
            assetName={item.title}
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
        onPress={(DATA) => navigation.navigate('AddFoodScreen')}
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
        <View style={styles.createFoodComponentArea}>
          {/* Select Food Area */}

          <View style={styles.createdFoodArea}>
            <View style={styles.myFoodTitleText}>
              <ShareActionAreaHeadingText>
                Select Food/Stall
              </ShareActionAreaHeadingText>
            </View>
            <View style={styles.myFoodListArea}>
              <View style={styles.mainContainer}>
                <HorizontalScrollViewContainer>
                  <View style={styles.itemContainer}>
                    {renderItems()}
                    {addButton()}
                  </View>
                </HorizontalScrollViewContainer>
              </View>
            </View>
          </View>

          {/* Select Share Type */}

          <View style={styles.selectFoodTypeArea}>
            <View style={styles.myFoodTitleText}>
              <SectionHeadingText>Select Food Type</SectionHeadingText>
            </View>
            <View style={styles.categoryButtonsArea}>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('DonateFoodScreen', {item: item})
                }>
                Donate
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('SellFoodScreen', {item: item})
                }>
                Sell
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('StallFoodScreen', {item: item})
                }>
                Stall
              </CategoryOutlinedButton>
            </View>
            <View style={styles.pngImageArea}>
              <Image
                resizeMode="contain"
                source={ShareFood}
                style={styles.imageContainer}
              />
            </View>
          </View>
        </View>
      ) : (
        // This view will be visible before selecting food item
        <View style={styles.createFoodComponentArea}>
          <View style={styles.createdFoodArea}>
            <View style={styles.mySharedFoodButtonArea}>
              <OutlinedActionIconButton
                iconName="eye-outline"
                onPress={() => navigation.navigate('MySharedFood')}>
                My Shared Food
              </OutlinedActionIconButton>
            </View>
            <View style={styles.myFoodTitleText}>
              {data.length == 0 ? (
                <ShareActionAreaHeadingText>
                  Add Food/Stall
                </ShareActionAreaHeadingText>
              ) : (
                <ShareActionAreaHeadingText>
                  Select Food/Stall
                </ShareActionAreaHeadingText>
              )}
            </View>
            <View style={styles.myFoodListArea}>
              <View style={styles.mainContainer}>
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
                  You have not selected any Food Item
                </ButtonTextLightGrey>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Component;
