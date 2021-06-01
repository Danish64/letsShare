import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

import SellFoodFormArea from '../../../../../components/ScreensMainComponents/FoodShareComponents/SellFoodFormArea';
import {ScrollView, View, Text} from 'react-native';

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
      toScreen: 'Sell Food',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Sell Food', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header hasBackIcon title="Sell Food" navigation={navigation} />
      <ScrollViewContainer>
        <SellFoodFormArea navigation={navigation} Data={route.params.item} />
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
