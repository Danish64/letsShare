<<<<<<< HEAD
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
=======
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';
<<<<<<< HEAD
=======
import { Goods } from '../../../res/constants/dummyData';
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, DATA, icon}) => {
  const [data, setData] = useState(DATA);
<<<<<<< HEAD
=======
  // const [view, setView] = useState(false);
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f

  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item.id)}
            selected={item.selected}
            iconName={icon}
<<<<<<< HEAD
            assetName={item.assetName}
          />
=======
            title={item.title}
            assetName={item.title}
          />
          
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
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
<<<<<<< HEAD
        onPress={(DATA) => navigation.navigate('AddRideScreen')}
=======
        onPress={(DATA) => navigation.navigate('AddGoodsScreen')}
>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };
<<<<<<< HEAD
  //to use styles -> {styles.propertyName}
=======

>>>>>>> ac6a846e34c5ae65bc304ba80c1c90e206730e0f
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
