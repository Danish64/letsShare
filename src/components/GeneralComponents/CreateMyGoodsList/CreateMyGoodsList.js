import React from 'react';
import { 
  TouchableOpacity,
  FlatList    
} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'res/constants/Colors.js';
import {
  ButtonTextBlack,
} from 'res/UniversalComponents/Text.js';
import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';
import {PrimaryButton, AddAssetButton} from 'res/UniversalComponents/Button.js';
import {View} from 'react-native';

//Third Party Exports Ends

const Component = ({navigation, GoodsList}) => {

  const renderItem = ({item}) => {
    return(
      <AddAssetButton iconName="cart-outline">{item.title}</AddAssetButton>
    );
  };

  return (
    <HorizontalScrollViewContainer>
      <View style={styles.itemsArea}>
        <FlatList
          data={GoodsList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
        <AddAssetButton
          onPress={() => navigation.navigate('AddGoodsScreen')}
          iconName="add-circle-outline">
          Add Goods
        </AddAssetButton>
      </View>
    </HorizontalScrollViewContainer>
  );
};
export default Component;
