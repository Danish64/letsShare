import React from 'react';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import {View, Text} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  //to use styles -> {styles.propertyName}
  return (
    <HorizontalScrollViewContainer>
      <View style={styles.itemsArea}>
        <AddAssetButton iconName="cart-outline">Wearable</AddAssetButton>
        <AddAssetButton iconName="cart-outline">Household</AddAssetButton>
        <AddAssetButton
        //   onPress={() => navigation.navigate('')}
          iconName="add-circle-outline">
          Add Goods
        </AddAssetButton>
      </View>
    </HorizontalScrollViewContainer>
  );
};
export default Component;
