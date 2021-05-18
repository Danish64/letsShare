import React from 'react';
import {FlatList} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import AvailFoodListItem from './AvailFoodListItem';
import LoadingIndicator from '../../LoadingIndicator';

const Component = ({navigation, data}) => {
  if (!data) {
    return <LoadingIndicator />;
  }
  return (
    <FlatList
      data={data ? data : FlatListData}
      renderItem={({item}) => (
        <AvailFoodListItem
          key={item._id}
          itemId={item._id}
          item={item}
          onPress={() =>
            navigation.navigate('AvailFoodDetail', {
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
