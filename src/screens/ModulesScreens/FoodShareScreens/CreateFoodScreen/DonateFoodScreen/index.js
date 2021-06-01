import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

import DonateFoodFormArea from '../../../../../components/ScreensMainComponents/FoodShareComponents/DonateFoodFormArea';

import {connect} from 'react-redux';

import UserActivityClass from '../../../../../utils/UserActivity';

import {useSelector} from 'react-redux';

const Component = ({navigation, route}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  let UserActivity = new UserActivityClass();
  
  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Create Food Screen',
      toScreen: 'Donate Food',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Donate Food', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header hasBackIcon title="Donate Food" navigation={navigation} />
      <ScrollViewContainer>
        <DonateFoodFormArea navigation={navigation} Data={route.params.item} />
      </ScrollViewContainer>
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
