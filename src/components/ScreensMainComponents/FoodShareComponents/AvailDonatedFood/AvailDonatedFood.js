import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AvailFoodList from '../../../GeneralComponents/FoodListComponents/AvailFoodList';
import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import {Food} from 'res/constants/dummyData';

const Component = ({navigation}) => {
  const userId = useSelector((state) => state.userInformation.user._id);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDonatedFoodData();
  }, []);

  const fetchDonatedFoodData = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost('v1/foodShares/getAllFoodShares', data);
    setData(result.data);
  };
  return <AvailFoodList data={data} navigation={navigation} />;
};
export default Component;
