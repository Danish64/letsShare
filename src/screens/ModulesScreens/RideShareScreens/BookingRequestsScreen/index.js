import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import RequestsList from '../../../../components/GeneralComponents/RequestList';
import {useNavigation, useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

import UserActivityClass from '../../../../utils/UserActivity';

const Component = ({navigation, item}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

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

  const route = useRoute();
  return (
    <Container>
      <Header title="Booking Requests" hasBackIcon navigation={navigation} />
      <RequestsList navigation={navigation} data={route.params.item} />
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
