import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import SharedGoodsListItem from './SharedGoodsListItem';
import IllustrationContainer from '../../../GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../LoadingIndicator';
import ListItemDeleteAction from '../../ListItemDeleteAction';
import {doDeleteAws} from '../../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';

const Component = ({navigation, data}) => {
  const isFocused = useIsFocused();

  const handleDelete = async (itemId) => {
    const data = {
      id: itemId,
    };
    console.log(data);
    const result = await doDeleteAws(data, 'v1/goodShares/deleteGoodShare');
    console.log('Delete Goods', result);
  };
  // console.log('Data in My Shared Rides Screen', data);
  const listEmptyComponent = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <IllustrationContainer
          style={{width: 300, height: 300}}
          illustration={Illustration}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <ButtonTextLightGrey>
            You have not shared any goods
          </ButtonTextLightGrey>
        </View>
      </View>
    );
  };

  if (!data) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LoadingIndicator />
      </View>
    );
  }
  return (
    <FlatList
      data={data ? data : FlatListData}
      ListEmptyComponent={listEmptyComponent}
      renderItem={({item}) => (
        <SharedGoodsListItem
          item={item}
          onPress={() => {
            navigation.navigate('GoodsBookingRequests', {item: item});
          }}
          renderRightAction={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item._id)} />
          )}
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
    />
  );
};
export default Component;
