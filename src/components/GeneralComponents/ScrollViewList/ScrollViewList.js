import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';
import {Goods} from '../../../res/constants/dummyData';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, DATA, icon, navigateTo, onSelectRide}) => {
  const [data, setData] = useState(DATA);
  const [selected, setSelected] = useState(false);
  // const [view, setView] = useState(false);

  const renderItems = () => {
    console.log(data);
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => {
              selectItem(item.id);
              onSelectRide(item.assetName);
            }}
            selected={item.selected}
            iconName={icon}
            title={item.title}
            assetName={item.assetName}
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
            selected: false,
          };
        } else {
          return {
            ...item,
            selected: true,
          };
        }
        //  return item;
      }),
    ];
    setData(newData);
  };

  const addButton = (navigation, navigateTo) => {
    return (
      <AddAssetButton
        onPress={() => navigation.navigate(navigateTo)}
        iconName="add-circle-outline"
        addButton
        setUserRidesData={setData}
        assetName="Add"></AddAssetButton>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.mainContainer}>
      <HorizontalScrollViewContainer>
        <View style={styles.itemContainer}>
          {renderItems()}
          {addButton(navigation, navigateTo)}
        </View>
      </HorizontalScrollViewContainer>
    </View>
  );
};
export default Component;
