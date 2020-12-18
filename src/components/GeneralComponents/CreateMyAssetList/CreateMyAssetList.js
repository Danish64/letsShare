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
        <AddAssetButton iconName="car-outline">Alto VXR</AddAssetButton>
        <AddAssetButton iconName="car-outline">Corolla GLI</AddAssetButton>
        <AddAssetButton iconName="car-outline">Civic</AddAssetButton>
        <AddAssetButton
          onPress={() => navigation.navigate('AddRideScreen')}
          iconName="add-circle-outline">
          Add Ride
        </AddAssetButton>
      </View>
    </HorizontalScrollViewContainer>
  );
};
export default Component;
