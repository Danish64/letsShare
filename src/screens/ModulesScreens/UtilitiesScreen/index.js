import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';

//Native Exports Ends Here

//Third Party Exports Starts
import Header from '../../../components/GeneralComponents/Header';
import UtilitiesShareContainer from '../../../components/ContainersComponent/UtilitiesShareContainer';
//Third Party Exports Ends
import {connect} from 'react-redux';

import UserActivityClass from '../../../utils/UserActivity';


import GoodsShareHome from '../../../components/ContainersComponent/GoodsShareContainer';

const Component = ({navigation, userInfo}) => {
  let UserActivity = new UserActivityClass();

  useEffect(() => {
    // console.log('User Info ', userInfo.user);
    UserActivity.mixpanel.identify(userInfo.user.email);
    const eventInfo = {
      screen: 'Utilities Home',
      email: userInfo.user.email,
    };
    UserActivity.mixpanel.track('Utilities Opened', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

  return (
    <Container>
      <Header
        
        title="Utilities Sharing"
        navigation={navigation}
        navigateTo="HomeSearchScreen">
        </Header>
      <UtilitiesShareContainer navigation={navigation} />
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

