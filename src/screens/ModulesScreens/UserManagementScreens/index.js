import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import IntroHeader from '../../../components/ScreensMainComponents/UserManagementComponets/IntroHeader';
import SettingsRow from '../../../components/ScreensMainComponents/UserManagementComponets/SettingsRow';
import {connect} from 'react-redux';

const Component = ({navigation, userInfo}) => (
  <ScrollViewContainer>
    <IntroHeader />
    <SettingsRow itemName="Email" itemValue={userInfo.user.email} />
    <SettingsRow itemName="Phone" itemValue={userInfo.user.phone} />
    <SettingsRow itemName="Lives In" itemValue={userInfo.user.city} />
    <SettingsRow
      itemName="Works At"
      itemValue={userInfo.user.workAddress.house}
    />
    <SettingsRow
      itemName="Spaces Shared"
      itemValue={userInfo.user.sharedAssets.sharedSpaces.length}
    />
    <SettingsRow
      itemName="Rides Shared"
      itemValue={userInfo.user.sharedAssets.sharedRides.length}
    />
    <SettingsRow
      itemName="Food Shared"
      itemValue={userInfo.user.sharedAssets.sharedFoods.length}
    />
    <SettingsRow
      itemName="Goods Shared"
      itemValue={userInfo.user.sharedAssets.sharedGoods.length}
    />

    <SettingsRow
      itemName="Spaces Availed"
      itemValue={userInfo.user.availedAssets.availedSpaces.length}
    />

    <SettingsRow
      itemName="Rides Availed"
      itemValue={userInfo.user.availedAssets.availedRides.length}
    />

    <SettingsRow
      itemName="Food Availed"
      itemValue={userInfo.user.availedAssets.availedFoods.length}
    />

    <SettingsRow
      itemName="Spaces Availed"
      itemValue={userInfo.user.availedAssets.availedGoods.length}
    />
    <SettingsRow itemName="Review" />
    <SettingsRow itemValue={userInfo.user.reviews[0].review} />
    <SettingsRow />

    <SettingsRow itemName="App Version" itemValue="v 1.0.0" />

    <SettingsRow />
  </ScrollViewContainer>
);
function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
