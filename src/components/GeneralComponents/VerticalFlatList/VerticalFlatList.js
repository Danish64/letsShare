import React from 'react';
import {FlatList} from 'react-native';
import styles from './style';
import {FlatListData} from 'res/constants/dummyData.js';
import FlatListItem from './FlatListItem';

const Component = ({navigation, data, screen}) => {
    return(
        <FlatList
            data={data ? data : FlatListData}
            renderItem={({item}) => (
                <FlatListItem
                    title={item.title}
                    rideName={item.rideName}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    fare={item.fare}
                    // startLocation={item.startLocation}
                    seatsAvailable={item.seatsAvailable}
                    // location={item.location}
                    pickupLocation= {item.pickupLocation}
                    onPress={() => {navigation.navigate(screen, { item: item })}}
                />
            )}
            style={styles.FlatListStyle}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
};
export default Component;