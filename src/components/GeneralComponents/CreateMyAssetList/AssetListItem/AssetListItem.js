import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, assetName, assetIcon}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.itemsArea}>
      <AddAssetButton
        onPress={() => navigation.navigate('AddRideScreen')}
        iconName={assetIcon}
        assetName={assetName}></AddAssetButton>
    </View>
  );
};
export default Component;
