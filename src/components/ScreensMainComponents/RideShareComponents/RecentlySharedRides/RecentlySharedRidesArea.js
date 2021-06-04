import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';

import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';

//Native Exports Ends Here

const Component = ({navigation}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchAllRides();
  }, [isFocused]);

  const userId = useSelector((state) => state.userInformation.user._id);
  console.log('User ID', userId);
  const [allRides, setAllRides] = useState(null);

  const fetchAllRides = async () => {
    let data = {
      sharerId: userId,
    };
    const result = await doPost('v1/userRides/getAllRideShares', data);
    setAllRides(result.data);
  };

  // const Testing = () => {
  //   console.log('Refresh Pressed');
  // };
  return (
    <View style={styles.nearBySharesArea}>
      <View style={styles.shareRideTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList
          refreshAction={fetchAllRides}
          data={allRides}
          navigation={navigation}
          screen="AvailRideDetail"
        />
      </View>
    </View>
  );
};

export default Component;
