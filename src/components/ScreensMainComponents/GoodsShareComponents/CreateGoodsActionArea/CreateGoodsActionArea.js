import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';

import {
  ShareActionAreaHeadingText,
  SectionHeadingText,
  ButtonTextLightGrey,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from '../../../../res/UniversalComponents/HorizontalScrollViewContainer';
import LoadingIndicator from '../../../GeneralComponents/LoadingIndicator';

import {
  CategoryOutlinedButton,
  PrimaryButton,
  AddAssetButton,
  SelectRideButton,
} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {useIsFocused} from '@react-navigation/native';

import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
} from '../../../../utils/AxiosMethods';

import {useSelector} from 'react-redux';

import ShareGoods from 'res/images/ModulesImages/GoodsSharingImages/shareGoods.png';
import {GoodsList} from '../../../../res/constants/dummyData';


const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const ownerId = state.userInformation.user._id;
  const userId = state.userInformation.user._id;
  const sharerId = state.userInformation.user._id;

  const [data, setData] = useState();
  const [userAllGoods, setUserAllGoods] = useState();
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});


  const getGoods = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userGoods/getUserGoods', data);
    const goods = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setData(goods);
  };

  const getUserAllGoods = async () => {
    const data = {
      sharerId: sharerId,
    };
    const result = await doPost('v1/goodShares/getUserGoodShares', data);
    const allSharedGoods = result.data.map((item, index) => {
      item.key = index;
      return item;
    });
    setUserAllGoods(allSharedGoods);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getUserAllGoods();
    getGoods();
    renderItems();
  }, [isFocused]);

  // Render Goods
  const renderItems = () => {
    return data?.map((item, index) => {
      return (
        <View key={index}>
          <SelectRideButton
            onPress={() => selectItem(item._id, item.selected)}
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
        onPress={(DATA) => navigation.navigate('AddGoodsScreen')}
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

          <View style={styles.mySharedGoods}>
            <PrimaryButton
           onPress={() =>
            navigation.navigate('SharedGoodsScreen', {data: userAllGoods})
          }>
              My Shared Goods
            </PrimaryButton>
          </View>

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
