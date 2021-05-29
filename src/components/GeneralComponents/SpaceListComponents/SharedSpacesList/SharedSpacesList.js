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

const Component = ({navigation, data}) => {
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
            <ListItemDeleteAction onPress={() => console.log('Delete')} />
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
