import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import IllustrationContainer from '../../../GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../LoadingIndicator';
import ListItemDeleteAction from '../../ListItemDeleteAction';
import SharedSpacesListItem from './SharedSpacesListItem';
import {doDeleteAws} from '../../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';

const Component = ({navigation, data}) => {
  const isFocused = useIsFocused();

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
            You have not shared any Space
          </ButtonTextLightGrey>
        </View>
      </View>
    );
  };

  const handleDelete = async (itemId) => {
    const data = {
      id: itemId,
    };
    console.log(data);
    const result = await doDeleteAws(
      data,
      'v1/residenceSpaceShares/deleteResidenceSpaceShare',
    );
    console.log('Delete Space', result);
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
        <SharedSpacesListItem
          item={item}
          onPress={() => {
            navigation.navigate('SpaceBookingRequests', {item: item});
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
