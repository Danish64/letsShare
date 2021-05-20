
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Native Exports Ends Here

//Third Party Exports Starts
import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList/';
import styles from './style';

import {doGet, doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

import {
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';


const Component = () => {
  const navigation = useNavigation();

  useEffect(() => {
    fetchRecentlySharedSpaces();
  }, []);

  const userId = useSelector((state) => state.userInformation.user._id);
  const [recentlySharedSpaces, setRecentlySharedSpaces] = useState(null);

  const fetchRecentlySharedSpaces = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost('v1/nearByRideShares/getAllNearByRides', data);
    setRecentlySharedSpaces(result.data);
  };

  return (
    <View style={styles.recentlySharedSpacesArea}>
      <View style={styles.recentlySharedSpacesTitleText}>
        <SectionHeadingText>Recently Shared Spaces</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedSpacesListArea}>
        <HorizontalFlatList
          data={recentlySharedSpaces}
          navigation={navigation}
          screen="AvailSpaceDetail"
        />
      </View>
    </View>

  );
};

export default Component;
