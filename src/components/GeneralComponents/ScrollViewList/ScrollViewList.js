import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';
import { Goods } from '../../../res/constants/dummyData';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, DATA, icon}) => {
  const [data, setData] = useState(DATA);
  // const [view, setView] = useState(false);

  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item.id)}
            selected={item.selected}
            iconName={icon}
            title={item.title}
            assetName={item.title}
          />
          
        </View>
      );
    });
  };
  const selectItem = (selectedId) => {
    const newData = [
      ...data.map((item) => {
        if (selectedId === item.id) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
        // return item;
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

  return (
    <View style={styles.mainContainer}>
      <HorizontalScrollViewContainer>
        <View style={styles.itemContainer}>
          {renderItems()}
          {addButton()}
        </View>
      </HorizontalScrollViewContainer>
    </View>
  );
};
export default Component;
