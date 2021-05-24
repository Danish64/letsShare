import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import VerticalFlatList from '../../../GeneralComponents/VerticalFlatList';
import {Goods} from '../../../../res/constants/dummyData';
import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import AvailGoodsList from '../../../GeneralComponents/AvailGoodsList';

const Component = ({navigation, data}) => {
  return <AvailGoodsList data={data} navigation={navigation} />;
};
export default Component;
