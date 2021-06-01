import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import CreateRideContainer from '../../../../components/ContainersComponent/RideShareContainer/CreateRideContainer';
import {useNavigation, useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';

import UserActivityClass from '../../../../utils/UserActivity';

//Native Exports Ends Here
//Third Party  Exports Starts

//Third Party Exports Ends

const Component = ({navigation, userInfo}) => {
  let UserActivity = new UserActivityClass();
  let user = userInfo.user;

  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Ride  Home',
      toScreen: 'Create Ride',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Create Ride', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

  //  console.log('RideShareScreen', navigation);

  return (
    <Container>
      <Header navigation={navigation} hasBackIcon title="Share Ride" />
      <CreateRideContainer navigation={navigation} />
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
