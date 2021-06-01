import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import AddFoodFormContainer from '../../../../../components/ContainersComponent/FoodShareContainer/CreateFoodContainer/AddFoodFormContainer';

import {connect} from 'react-redux';

import UserActivityClass from '../../../../../utils/UserActivity';

import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  let UserActivity = new UserActivityClass();

  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Create Food Screen',
      toScreen: 'Add Food Screen',
      email: user.email,
    };
    UserActivity.mixpanel.track(
      'Switching Screens - Add Food Screen',
      eventInfo,
    );
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header hasBackIcon title="Add Food" navigation={navigation} />
      <AddFoodFormContainer navigation={navigation} />
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
