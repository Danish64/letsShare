import React from 'react';
import {View, FlatList} from 'react-native';

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import AssetListItem from '../../GeneralComponents/CreateMyAssetList/AssetListItem';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, data, icon}) => {
  const addButton = () => {
    return (
      <AddAssetButton
        onPress={() => navigation.navigate('AddRideScreen')}
        iconName="add-circle-outline"
        assetName="Add"></AddAssetButton>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.container}>
      <FlatList
        data={data ? data : FlatListData}
        renderItem={({item}) => (
          <AssetListItem
            navigation={navigation}
            assetName={item.name}
            assetIcon={icon}
          />
        )}
        style={styles.FlatListStyle}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={addButton}
      />
    </View>
  );
};
export default Component;
