import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';

import Header from '../../../components/GeneralComponents/Header';
import GoodsShareHome from '../../../components/ContainersComponent/GoodsShareContainer';

import {connect} from 'react-redux';

import UserActivityClass from '../../../utils/UserActivity';


const Component = ({navigation, userInfo}) => {
  let UserActivity = new UserActivityClass();

  useEffect(() => {
    // console.log('User Info ', userInfo.user);
    UserActivity.mixpanel.identify(userInfo.user.email);
    const eventInfo = {
      screen: 'Goods Home',
      email: userInfo.user.email,
    };
    UserActivity.mixpanel.track('Goods Opened', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

  return (
    <Container>

      <Header hasBackIcon title="Goods Sharing" navigation={navigation} navigateTo="HomeSearchScreen" />
      <GoodsShareHome navigation={navigation}/>

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
