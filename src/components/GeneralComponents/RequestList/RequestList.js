import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import RequestListItem from './RequestListItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import LoadingIndicator from '../LoadingIndicator';
import {useIsFocused} from '@react-navigation/native';
import IllustrationContainer from '../../GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import {getDistance, getPreciseDistance} from 'geolib';
import {useDispatch} from 'react-redux';

const Component = ({navigation, data}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const route = useRoute();
  const shareId = data._id;
  const rideCategory = data.rideCategory;
  const fareRate = data.fareRate;
  const fareMethod = data.fareMethod;
  const sharerContact = data.ownerContactNumber;

  const [sharerFare, setSharerFare] = useState(null);

  const sharerStartLat = data.startLocation.latitude;
  const sharerStartLng = data.startLocation.longitude;

  const sharerEndLat = data.destinationLocation.latitude;
  const sharerEndLng = data.destinationLocation.longitude;

  const dist = getPreciseDistance(
    {latitude: sharerStartLat, longitude: sharerStartLng},
    {latitude: sharerEndLat, longitude: sharerEndLng},
  );

  const distInKm = dist / 1000;
  const sharerDistance = distInKm;

  useEffect(() => {
    calculateSharerFare();
  }, [isFocused]);

  const calculateSharerFare = () => {
    if (data.fareMethod == 'chargePerKm') {
      const fare = distInKm * data.fareRate;
      setSharerFare(fare);
    }
    if (data.fareMethod == 'chargePerDP') {
      const fare = data.fareRate;
      setSharerFare(fare);
    }
  };

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
            No Booking Request for the shared ride
          </ButtonTextLightGrey>
        </View>
      </View>
    );
  };

  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <FlatList
      data={data ? data.bookings : FlatListData}
      ListEmptyComponent={listEmptyComponent}
      renderItem={({item}) => (
        <RequestListItem
          ownerContactNumber={'92' + sharerContact.substring(1)}
          fareRate={fareRate}
          fareMethod={fareMethod}
          sharerFare={sharerFare}
          sharerDistance={sharerDistance}
          key={data._id}
          shareId={shareId}
          rideCategory={rideCategory}
          item={item}
        />
      )}
      style={styles.FlatListStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
