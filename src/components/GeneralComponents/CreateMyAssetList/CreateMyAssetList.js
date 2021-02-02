import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import styles from './style';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import {Text} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, DATA, icon}) => {
  const [data, setData] = useState(DATA);
  const selectItem = (selectedId) => {
    const newData = [
      ...data.map((item) => {
        if (selectedId === item.id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      }),
    ];
    setData(newData);
  };

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
          <AddAssetButton
            item={item}
            selected={item.selected}
            onPress={() => selectItem(item.id)}
            navigation={navigation}
            assetName={item.title}
            iconName={icon}
          />
        )}
        style={styles.FlatListStyle}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={addButton}
      />
    </View>
  );
};
export default Component;
