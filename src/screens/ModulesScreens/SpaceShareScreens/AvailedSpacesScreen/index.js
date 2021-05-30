import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailedSpacesList from '../../../../components/GeneralComponents/SpaceListComponents/MyAvailedSpacesList';
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
    const result = await doPost('v1/allSpaces/userAvailedSpaces', data);
    const allSpacesBookings = result.data.map((item, index) => {
      item.key = index;
      return item;
    });

    setUserAllBookings(allSpacesBookings);
  };

  return (
    <Container>
      <Header title="My Availed Goods" hasBackIcon navigation={navigation} />
      <View style={styles.listHeadingTextView}>
        <ShareActionAreaHeadingText>My Bookings</ShareActionAreaHeadingText>
      </View>
      <View style={styles.listView}>
        <AvailedSpacesList navigation={navigation} data={userAllBookings} />
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
