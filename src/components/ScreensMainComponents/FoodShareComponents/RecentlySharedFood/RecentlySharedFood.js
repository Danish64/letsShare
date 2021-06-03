import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList';

import {doGet, doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

import {
  HeadingText,
  GroupLabelText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';

const Component = ({navigation}) => {
  useEffect(() => {
    fetchFoodData();
  }, []);

  const userId = useSelector((state) => state.userInformation.user._id);
  const [donatedFood, setDonatedFood] = useState(null);

  const fetchFoodData = async () => {
    let data = {
      sharerId: userId,
    };
    const result = await doPost('v1/foodShares/getAllFoodShares', data);
    setDonatedFood(result.data);
  };
  return (
    <View style={styles.recentlySharedFoodArea}>
      <View style={styles.shareFoodTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList
          refreshAction={fetchFoodData}
          data={donatedFood}
          navigation={navigation}
          screen="AvailFoodDetail"
        />
      </View>
    </View>
  );
};

export default Component;
