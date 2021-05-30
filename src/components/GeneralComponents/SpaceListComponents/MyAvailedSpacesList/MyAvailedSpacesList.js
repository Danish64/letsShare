import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';

import AvailedSpacesListItem from './AvailedSpacesListItem';
import IllustrationContainer from '../../IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';

import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../LoadingIndicator';
import ListItemDeleteAction from '../../ListItemDeleteAction';

const Component = ({navigation, data}) => {
  console.log('Data in AvailedGoodsList', data);
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
          <ButtonTextLightGrey>Nothing to show</ButtonTextLightGrey>
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
        <AvailedSpacesListItem
          item={item}
          ownerContactNumber={'92' + item.ownerContactNumber.substring(1)}
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
