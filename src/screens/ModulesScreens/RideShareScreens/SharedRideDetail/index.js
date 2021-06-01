import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import SharedRidesList from '../../../../components/GeneralComponents/SharedRidesList';
import RecentlySharedItem from '../../../../components/ScreensMainComponents/RideShareComponents/RecentlySharedItem';
import {useNavigation, useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

import UserActivityClass from '../../../../utils/UserActivity';

const Component = ({navigation, item}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  const route = useRoute();
  console.log('Shared Ride Detail Screen', route.params.item);

  let UserActivity = new UserActivityClass();
  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Ride  Home',
      toScreen: 'Ride Detail',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Ride Detail', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

  // console.log('Shared Rides Detail Screen', route.params.data);

  return (
    <Container>
      <Header title="My Shared Rides" hasBackIcon navigation={navigation} />

      <RecentlySharedItem navigation={navigation} data={route.params.item} />
      {/* <SharedRidesList navigation={navigation} data={route.params.data} /> */}
    </Container>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStatesToProps, mapDispatchToProps)(Component);
