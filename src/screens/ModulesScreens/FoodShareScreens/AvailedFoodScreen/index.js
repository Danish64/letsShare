import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Share} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';

import IllustrationContainer from '../../../../components/GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import AvailedFoodsList from '../../../../components/GeneralComponents/FoodListComponents/AvailedFoodsList';

import {useNavigation, useRoute} from '@react-navigation/native';

import {ShareActionAreaHeadingText} from 'res/UniversalComponents/Text.js';
import {useIsFocused} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const route = useRoute();
  const state = useSelector((state) => state);
  const availerId = state.userInformation.user._id;

  const isFocused = useIsFocused();

  useEffect(() => {
    getUserAllBookings();
  }, [isFocused]);

  const [userAllBookings, setUserAllBookings] = useState();

  // all bookings whether accepted or not
  const getUserAllBookings = async () => {
    const data = {
      availerId: availerId,
      active: true,
    };
    const result = await doPost('v1/foodShares/userAvailedFoods', data);
    const allFoodBookings = result.data.map((item, index) => {
      item.key = index;
      return item;
    });

    setUserAllBookings(allFoodBookings);
  };

  return (
    <Container>
      <Header title="My Availed Foods" hasBackIcon navigation={navigation} />
      <View style={styles.listHeadingTextView}>
        <ShareActionAreaHeadingText>My Bookings</ShareActionAreaHeadingText>
      </View>
      <View style={styles.listView}>
        <AvailedFoodsList navigation={navigation} data={userAllBookings} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  listHeadingTextView: {
    marginTop: mvs(20, 0.5),
    marginHorizontal: ms(20, 0.5),
  },
  listView: {
    flex: 1,
    marginVertical: mvs(15, 0.5),
    marginHorizontal: ms(15, 0.5),
    borderRadius: ms(10, 0.6),
    elevation: 3,
    marginTop: mvs(10, 0.5),
  },
});

export default Component;
