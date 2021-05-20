import React from 'react';
import {FlatList} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import AvailGoodsListItem from './AvailGoodsListItem';
import LoadingIndicator from '../LoadingIndicator';

const Component = ({navigation, data, listFor}) => {
  if (!data) {
    return <LoadingIndicator />;
  }
  return (
    <FlatList
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <AvailGoodsListItem
          key={item._id}
          itemId={item._id}
          item={item}
          image={item.image}
          title={item.title}
          description={item.description}
          quantity={item.quantity}
          shareType={item.shareType}
          deliveryInfo={item.deliveryInfo}
          pickUpTime={item.pickUpTime}
          // seatsAvailable={item.seatsAvailable}
          pickUpLocation={item.pickUpLocation}
          price={item.price}
          onPress={() =>
            navigation.navigate('RecentlySharedScreen', {
              item: item,
              listFor: listFor,
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
