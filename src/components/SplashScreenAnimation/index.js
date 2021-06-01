import React, {useEffect, useState} from 'react';
import {View, StatusBar, Text} from 'react-native';
import SplashScreenLogoAnimation from 'res/animations/SplashScreenLogo.json';
import LottieView from 'lottie-react-native';
import styles from 'res/styles/index.styles.js';

//For Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authTokenRequest} from '../../ducks/actions';
//For Getting Token
import {retrieveAuthToken} from '../../utils/AsyncStorageUtilities';
import useDidMountEffect from '../../services/CustomHooks/useDidMountEffect';
const UserActivity = require('../../utils/UserActivity');

const Component = ({navigation, authTokenRequest, userInfo}) => {
  const [Loading, setLoading] = useState(true);
  const [token, setToken] = useState('');

  const tokenHandler = (token) => {
    setToken(token);
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#FFFFFF');
  }, []);

  useEffect(() => {
    retrieveAuthToken(tokenHandler);
  }, []);

  useDidMountEffect(() => {
    try {
      if (token) {
        // console.log('JWT Token ->', token);
        authTokenRequest(token);
      } else {
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{name: 'Authentication'}],
        });
      }
    } catch (err) {
      console.log('Splash Screen Error', err.message);
    }
  }, [token]);

  useDidMountEffect(() => {
    setLoading(false);
    // console.log('Store updated with token', userInfo.user);

    try {
      // const userInfo = {
      //   $email: userInfo.user.email,
      // };
      // UserActivity.setOnLogin(userInfo.user._id, userInfo);
      // const eventInfo = {
      //   screen: 'Log In',
      //   email: userInfo.user.email,
      // };
      // UserActivity.trackUserActivity(
      //   userInfo.user._id,
      //   'User logs in',
      //   eventInfo,
      // );

      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (err) {}
  }, [userInfo.user]);

  useDidMountEffect(() => {
    setLoading(false);
    console.log('Store updated with token response Failed', userInfo.error);

    try {
      navigation.reset({
        index: 0,
        routes: [{name: 'Authentication'}],
      });
    } catch (err) {}
  }, [userInfo.error]);

  return (
    <View style={styles.splashScreenStyle}>
      <LottieView
        source={SplashScreenLogoAnimation}
        style={{width: '50%'}}
        autoPlay
      />
    </View>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  authTokenRequest: bindActionCreators(authTokenRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
