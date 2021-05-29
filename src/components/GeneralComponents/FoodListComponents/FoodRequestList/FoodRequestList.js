import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import FoodRequestListItem from './FoodRequestListItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import LoadingIndicator from '../../LoadingIndicator';
import {useIsFocused} from '@react-navigation/native';
import IllustrationContainer from '../../IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';

const Component = ({navigation, data}) => {
  const route = useRoute();
  const shareId = data._id;
  const foodShareType = data.shareType;

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
            No Booking Request for the shared Food Item
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
        <FoodRequestListItem
          ownerContactNumber={'92' + item.availerPhoneNumber.substring(1)}
          key={data._id}
          shareId={shareId}
          foodShareType={foodShareType}
          item={item}
        />
      )}
      style={styles.FlatListStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Component;
