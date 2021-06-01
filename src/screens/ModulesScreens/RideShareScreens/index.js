import React, {useEffect, useState} from 'react';
import Container from 'res/UniversalComponents/Container.js';

import RideShareHome from '../../../components/ContainersComponent/RideShareContainer';
import Header from '../../../components/GeneralComponents/Header';
import {connect} from 'react-redux';

import UserActivityClass from '../../../utils/UserActivity';

const Component = ({navigation, userInfo}) => {
  let UserActivity = new UserActivityClass();

  useEffect(() => {
    // console.log('User Info ', userInfo.user);
    UserActivity.mixpanel.identify(userInfo.user.email);
    const eventInfo = {
      screen: 'Ride Home',
      email: userInfo.user.email,
    };
    UserActivity.mixpanel.track('Rides Opened', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

  return (
    <Container>
      <Header
        title="Ride Sharing"
        navigation={navigation}
        navigateTo="HomeSearchScreen"
        isSearchable
      />
      <RideShareHome navigation={navigation} />
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
