import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, DATA, icon}) => {
  const [data, setData] = useState(DATA);

  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item.id)}
            selected={item.selected}
            iconName={icon}
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
        onPress={(DATA) => navigation.navigate('AddRideScreen')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };
  //to use styles -> {styles.propertyName}
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
