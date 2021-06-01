import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import AddRideFormContainer from '../../../../../components/ContainersComponent/RideShareContainer/CreateRideContainer/AddRideFormContainer';
import {connect} from 'react-redux';

import UserActivityClass from '../../../../../utils/UserActivity';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, userInfo}) => {
  let UserActivity = new UserActivityClass();
  let user = userInfo.user;

  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Ride  Home',
      toScreen: 'Add Ride',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Add Ride', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  //  console.log('RideShareScreen', navigation);
  return (
    <Container>
      <Header navigation={navigation} hasBackIcon title="Add Ride" />
      <AddRideFormContainer navigation={navigation} />
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
