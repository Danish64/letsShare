import React, {useState, useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../../components/GeneralComponents/Header';
import SellGoodsFormContainer from '../../../../../components/ContainersComponent/GoodsShareContainer/CreateGoodsContainer/SellGoodsFormContainer';
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
      onScreen: 'Create Goods Screen',
      toScreen: 'Sell Goods',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Sell Goods', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header hasBackIcon title="Sell Goods"  navigation={navigation}/>
      <SellGoodsFormContainer navigation={navigation} data={route.params.item}/>
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

