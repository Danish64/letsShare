import React from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import AvailRidesListItem from './AvailRidesListItem';
import LoadingIndicator from '../../../components/GeneralComponents/LoadingIndicator';
import IllustrationContainer from '../IllustrationContainer';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';

const Component = ({navigation, data}) => {
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
          <ButtonTextLightGrey>No food Available</ButtonTextLightGrey>
        </View>
      </View>
    );
  };
  if (!data) {
    return <LoadingIndicator />;
  }
  return (
    <FlatList
      ListEmptyComponent={listEmptyComponent}
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <AvailRidesListItem
          key={item._id}
          itemId={item._id}
          item={item}
          image={item.image}
          rideName={item.rideName}
          registrationNo={item.registrationNumber}
          fare={item.fare}
          rideCategory={item.rideCategory}
          startLocation={item.startLocation}
          destinationLocation={item.destinationLocation}
          seatsAvailable={item.seatsAvailable}
          pickupLocation={item.pickupLocation}
          onPress={() =>
            navigation.navigate('AvailRideDetail', {
              item: item,
            })
          }
        />
      )}
      style={styles.FlatListStyle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
