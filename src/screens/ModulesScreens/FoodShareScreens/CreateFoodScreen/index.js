import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';


import {connect} from 'react-redux';

import UserActivityClass from '../../../../utils/UserActivity';

import {useSelector} from 'react-redux';

import CreateFoodContainer from '../../../../components/ContainersComponent/FoodShareContainer/CreateFoodContainer';


const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  let UserActivity = new UserActivityClass();
  
  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Food  Home',
      toScreen: 'Create Food Screen',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Create Food Screen', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header hasBackIcon title="Share Food" navigation={navigation} />
      <ScrollViewContainer>
        <CreateFoodContainer navigation={navigation} />
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
