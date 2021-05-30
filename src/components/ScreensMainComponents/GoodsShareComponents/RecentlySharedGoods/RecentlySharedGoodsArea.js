import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HorizontalFlatList from '../../../GeneralComponents/HorizontalFlatList/';

import {doGet, doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

import {SectionHeadingText} from 'res/UniversalComponents/Text.js';
import styles from './style';

import {Goods, testData} from '../../../../res/constants/dummyData.js';

//Third Party Exports Ends

const Component = ({navigation}) => {
  useEffect(() => {
    fetchGoodsData();
  }, []);

  const userId = useSelector((state) => state.userInformation.user._id);
  const [donatedGoods, setDonatedGoods] = useState(null);

  const fetchGoodsData = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost('v1/goodShares/getAllGoodShares', data);
    setDonatedGoods(result.data);
  };

  return (
    <View style={styles.recentlySharedGoodsArea}>
      <View style={styles.shareGoodsTitleText}>
        <SectionHeadingText>Recently Shared</SectionHeadingText>
      </View>
      <View style={styles.recentlySharedFlatlistArea}>
        <HorizontalFlatList
          data={donatedGoods}
          navigation={navigation}
          screen="AvailGoodsDetail"
        />
      </View>
    </View>
  );
};

export default Component;
