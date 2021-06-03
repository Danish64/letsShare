import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import SharedRidesListItem from './SharedRidesListItem';
import IllustrationContainer from '../../GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../LoadingIndicator';
import ListItemDeleteAction from '../../GeneralComponents/ListItemDeleteAction';
import {doDeleteAws} from '../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';

const Component = ({navigation, data}) => {
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   isFocused;
  // }, [handleDelete]);

  const handleDelete = async (itemId, rideCategory, item) => {
    console.log(item);
    if (rideCategory == 'Nearby') {
      const data = {
        id: itemId,
      };
      const result = await doDeleteAws(
        data,
        'v1/nearByRideShares/deleteNearByRideShare',
      );
      console.log('Nearby Ride delete result', result);
    }
    if (rideCategory == 'CityToCity') {
      const data = {
        id: itemId,
      };
      const result = await doDeleteAws(
        data,
        'v1/cityToCityRideShares/deleteCityToCityRideShare',
      );
      console.log('City to city Ride delete result', result);
    }
    if (rideCategory == 'TourRide') {
      const data = {
        id: itemId,
      };
      const result = await doDeleteAws(
        data,
        'v1/tourRideShares/deleteTourRideShare',
      );
      console.log('Tour Ride delete result', result);
    }
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
            You have not shared any ride
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
          fare={item.fare}
          fareMethod={item.fareMethod}
          seatsAvailable={item.seatsAvailable.toString()}
          image={item.image}
          onPress={() => {
            navigation.navigate('BookingRequestsScreen', {item: item});
          }}
          renderRightAction={() => (
            <ListItemDeleteAction
              onPress={() => handleDelete(item._id, item.rideCategory, item)}
            />
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
