import React from 'react';
import {View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import {HeadingText, BodyTextBold} from 'res/UniversalComponents/Text.js';
import {LandscapeImageButtonWhite} from 'res/UniversalComponents/Button.js';
import GoogleIcon from 'res/images/ModulesImages/AuthenticationImages/googleIcon.png';

import styles from './style';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.socialLoginComponentArea}>
      <View style={styles.googleLoginButton}>
        <LandscapeImageButtonWhite icon={GoogleIcon}>
          Sign in with Google
        </LandscapeImageButtonWhite>
        {/* <GoogleSigninButton
            style={styles.googleButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => 'Google sign in button clicked'}
            // onPress={this._signIn}
            //   disabled={this.state.isSigninInProgress}
          /> */}
      </View>
    </View>
  );
};

export default Component;
