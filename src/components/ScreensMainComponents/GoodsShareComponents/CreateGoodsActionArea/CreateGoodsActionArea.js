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
import ShareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';
import {GoodsList} from '../../../../res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [data, setData] = useState(GoodsList);
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    renderItems;
  }, [addButton]);

  // Render Goods
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
          // return {
          //   ...item,
          //   selected: true,
          // };
          // setItem(item);
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      }),
    ];
    setData(newData);
    // displaySection();
    // setView(true);
  };

  const displaySection = () => {
    data.map((item) => {
      if (item.selected === true) {
        return setView(true);
      }
    });
  };

  const addButton = () => {
    return (
      <AddAssetButton
        onPress={(DATA) => navigation.navigate('AddGoodsScreen')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };

  return (
    <>
      {view ? (
        <View style={styles.createGoodsComponentArea}>
          {/* Select Goods Area */}

          <View style={styles.createdGoodsArea}>
            <View style={styles.myGoodsTitleText}>
              <ShareActionAreaHeadingText>
                Select Goods
              </ShareActionAreaHeadingText>
            </View>
            <View style={styles.myGoodsListArea}>
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

          <View style={styles.selectGoodsTypeArea}>
            <View style={styles.myGoodsTitleText}>
              <SectionHeadingText>Select Goods Type</SectionHeadingText>
            </View>
            <View style={styles.categoryButtonsArea}>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('DonateGoodsScreen', {item: item})
                }>
                Donate
                {/* <Text>{JSON.stringify(item)}</Text> */}
              </CategoryOutlinedButton>
              <CategoryOutlinedButton
                iconName="arrow-forward-outline"
                onPress={() =>
                  navigation.navigate('SellGoodsScreen', {item: item})
                }>
                Sell
              </CategoryOutlinedButton>
            </View>
            <View style={styles.pngImageArea}>
              <Image
                resizeMode="contain"
                source={ShareGoods}
                style={styles.imageContainer}
              />
            </View>
          </View>
        </View>
      ) : (
        // Select Goods Type

        <View style={styles.createGoodsComponentArea}>
          <View style={styles.createdGoodsArea}>
            <View style={styles.myGoodsTitleText}>
              <ShareActionAreaHeadingText>
                Select Goods
              </ShareActionAreaHeadingText>
            </View>
            <View style={styles.myGoodsListArea}>
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
