import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';

import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';

//Native Exports Ends Here

const Component = ({navigation}) => {
  useEffect(() => {
    fetchNearbyRides();
  }, []);

  const userId = useSelector((state) => state.userInformation.user._id);
  const [nearbyRides, setNearbyRides] = useState(null);

  const fetchNearbyRides = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost('v1/nearByRideShares/getAllNearByRides', data);
    setNearbyRides(result.data);
  };
  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.shareRideTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList
          data={nearbyRides}
          navigation={navigation}
          screen="AvailRideDetail"
        />
      </View>
    </View>
  );
};

export default Component;
