import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts
import {
  HeadingText,
  GroupLabelText,
  TextButton,
  ShareActionAreaHeadingText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from '../../../../res/UniversalComponents/HorizontalScrollViewContainer';
import {AddAssetButton} from '../../../../res/UniversalComponents/Button';

import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import ScrollViewList from '../../../GeneralComponents/ScrollViewList';
import ShareFood from 'res/images/ModulesImages/FoodSharingImages/shareFood.png';
import {FoodList} from '../../../../res/constants/dummyData';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [data, setData] = useState(FoodList);
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    renderItems;
  }, [addButton]);

  // Render Food
  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item.id, item.selected)}
            selected={item.selected}
            iconName="cart-outline"
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
        onPress={(DATA) => navigation.navigate('AddFoodScreen')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };

  return (
    <>
      {view ? (
        <View style={styles.createFoodComponentArea}>
          {/* Select Food Area */}

          <View style={styles.createdFoodArea}>
            <View style={styles.myFoodTitleText}>
              <ShareActionAreaHeadingText>
                Select Food
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
                  // console.warn('Donate Food Screen')
                }>
                Donate
                {/* <Text>{JSON.stringify(item)}</Text> */}
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('SellFoodScreen', {item: item})
                  // console.warn('Sell Food Screen')
                }>
                Sell
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
        // Select Food Type

        <View style={styles.createFoodComponentArea}>
          <View style={styles.createdFoodArea}>
            <View style={styles.myFoodTitleText}>
              <ShareActionAreaHeadingText>
                Select Food
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
        </View>
      )}
    </>
  );
};

export default Component;