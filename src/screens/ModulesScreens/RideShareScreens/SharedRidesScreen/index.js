import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';
import Header from '../../../../components/GeneralComponents/Header';
import SharedRidesList from '../../../../components/GeneralComponents/SharedRidesList';
import RecentlySharedItem from '../../../../components/ScreensMainComponents/RideShareComponents/RecentlySharedItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import IllustrationContainer from '../../../../components/GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import {useIsFocused} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const sharerId = state.userInformation.user._id;

  const isFocused = useIsFocused();
  const route = useRoute();

  useEffect(() => {
    getUserAllRides();
  }, [isFocused]);

  const [userAllRides, setUserAllRides] = useState();
  const getUserAllRides = async () => {
    const data = {
      sharerId: sharerId,
    };
    const result = await doPost('v1/userRides', data);
    const allSharedRides = result.data.map((item, index) => {
      item.key = index;
      return item;
    });
    setUserAllRides(allSharedRides);
  };

  return (
    <Container>
      <Header title="My Shared Rides" hasBackIcon navigation={navigation} />
      <SharedRidesList
        navigation={navigation}
        data={userAllRides}
        refreshAction={getUserAllRides}
      />
    </Container>
  );
};

export default Component;
