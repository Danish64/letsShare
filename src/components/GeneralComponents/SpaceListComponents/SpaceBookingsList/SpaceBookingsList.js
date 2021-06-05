import React from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import {useNavigation, useRoute} from '@react-navigation/native';
import LoadingIndicator from '../../LoadingIndicator';
import {useIsFocused} from '@react-navigation/native';
import IllustrationContainer from '../../IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import SpaceBookingsListItem from './SpaceBookingsListItem';

const Component = ({navigation, data}) => {
  const route = useRoute();
  const shareId = data._id;
  const spaceType = data.spaceType;

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
            No Booking Request for the shared Item
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
        <SpaceBookingsListItem
          key={data._id}
          shareId={shareId}
          spaceType={spaceType}
          item={item}
          availerPhoneNumber={'92' + item.availerPhoneNumber.substring(1)}
        />
      )}
      style={styles.FlatListStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
