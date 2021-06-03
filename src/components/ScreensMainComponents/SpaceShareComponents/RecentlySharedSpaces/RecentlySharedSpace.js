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
import RecentlySharedSpacesList from '../../../GeneralComponents/SpaceListComponents/RecentlySharedList';
import styles from './style';

import {doGet, doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = () => {
  const navigation = useNavigation();
  const [recentlySharedSpaces, setRecentlySharedSpaces] = useState(null);
  const userId = useSelector((state) => state.userInformation.user._id);

  const fetchRecentlySharedSpaces = async () => {
    let data = {
      sharerId: userId,
    };

    const result = await doPost('v1/allSpaces/getAllSpaceShares', data);
    setRecentlySharedSpaces(result.data);
  };

  useEffect(() => {
    fetchRecentlySharedSpaces();
  }, []);

  return (
    <View style={styles.recentlySharedSpacesArea}>
      <View style={styles.recentlySharedSpacesTitleText}>
        <SectionHeadingText>Recently Shared Spaces</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedSpacesListArea}>
        <RecentlySharedSpacesList
          refreshAction={fetchRecentlySharedSpaces}
          data={recentlySharedSpaces}
          navigation={navigation}
          screen="AvailSpaceDetail"
        />
      </View>
    </View>
  );
};

export default Component;
