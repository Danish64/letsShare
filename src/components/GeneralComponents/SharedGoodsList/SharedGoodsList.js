import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import SharedRidesListItem from './SharedRidesListItem';
import IllustrationContainer from '../../GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../LoadingIndicator';

const Component = ({navigation, data}) => {
  console.log('Data in My Shared Goods Screen', data);cd 
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
        <SharedRidesListItem
          item={item}
          pickUpLocation={item.pickUpLocation}
          destinationLocation={item.destinationLocation}
          ridePicture={item.ridePictures}
          rideCategory={item.rideCategory}
          isAvailable={item.isAvailable}
          userId={item._id}
          sharerId={item.sharerId}
          rideName={item.rideName}
          registrationNo={item.registrationNumber}
          rideType={item.rideType}
          ownerContactNumber={item.ownerContactNumber}
          fare={item.fare}
          seatsAvailable={item.seatsAvailable.toString()}
          image={item.image}
          onPress={() => {
            navigation.navigate('BookingRequestsScreen', {item: item});
          }}
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
    />
  );
};
export default Component;
