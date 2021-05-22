import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';

import AvailedRidesListItem from './AvailedRidesListItem';
import IllustrationContainer from '../../GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';

import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../LoadingIndicator';
import ListItemDeleteAction from '../../GeneralComponents/ListItemDeleteAction';

const Component = ({navigation, data}) => {
  console.log('Data in AvailedRidesList', data);
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
        <AvailedRidesListItem
          item={item}
          startLocation={item.startLocation}
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
          fare={item.fareRate}
          seatsAvailable={item.seatsAvailable.toString()}
          image={item.image}
          //   onPress={() => {
          //     navigation.navigate('BookingRequestsScreen', {item: item});
          //   }}
          //   renderRightAction={() => (
          //     <ListItemDeleteAction onPress={() => console.log('Delete')} />
          //   )}
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
    />
  );
};
export default Component;
