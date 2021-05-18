import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';
import Header from '../../../../components/GeneralComponents/Header';

import SharedFoodsList from '../../../../components/GeneralComponents/FoodListComponents/SharedFoodsList';
import IllustrationContainer from '../../../../components/GeneralComponents/IllustrationContainer';

import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const sharerId = state.userInformation.user._id;

  const isFocused = useIsFocused();
  const route = useRoute();

  useEffect(() => {
    getUserSharedFood();
  }, [isFocused]);

  const [userSharedFood, setUserSharedFood] = useState();
  const getUserSharedFood = async () => {
    const data = {
      sharerId: sharerId,
    };
    const result = await doPost('v1/foodShares/getUserFoodShares', data);
    const allShareFoods = result.data.map((item, index) => {
      item.key = index;
      return item;
    });
    setUserSharedFood(allShareFoods);
  };

  return (
    <Container>
      <Header title="My Shared Food" hasBackIcon navigation={navigation} />
      <SharedFoodsList navigation={navigation} data={userSharedFood} />
    </Container>
  );
};

export default Component;
