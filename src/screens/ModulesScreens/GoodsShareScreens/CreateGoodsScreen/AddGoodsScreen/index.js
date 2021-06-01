import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import AddGoodsFormContainer from '../../../../../components/ContainersComponent/GoodsShareContainer/CreateGoodsContainer/AddGoodsFormContainer';
import {connect} from 'react-redux';

import UserActivityClass from '../../../../../utils/UserActivity';

import {useSelector} from 'react-redux';

const Component = ({navigation, userInfo}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  let UserActivity = new UserActivityClass();
  
  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Create Goods Screen',
      toScreen: 'Add Goods',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Add Goods', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header hasBackIcon title="Add Goods"  navigation={navigation}/>
      <AddGoodsFormContainer navigation={navigation} />
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
