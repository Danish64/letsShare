import React, {useState, useEffect, useContext} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import * as Yup from 'yup';

import {
  FormByFormik as Form,
  FormField as Field,
  SubmitButton as Submit,
} from 'res/UniversalComponents/Forms.js';
import {
  ShareActionAreaHeadingText,
  BodyTextBold,
} from 'res/UniversalComponents/Text.js';
import {LandscapeButtonBlack} from 'res/UniversalComponents/Button.js';
import styles from './style';
import {AuthContext} from 'res/constants/AuthContext.js';
import useDidMountEffect from '../../../../services/CustomHooks/useDidMountEffect';
import {checkUserEmail} from '../../../../services/AuthenticationServices';
import {useNavigation} from '@react-navigation/native';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [checkEmailLoading, setCheckEmailLoading] = useState(false);
  const [emailExists, setEmailExists] = useState();

  useDidMountEffect(() => {
    try {
      if (!checkEmailLoading && email.length > 0) {
        setCheckEmailLoading(true);
        checkUserEmail(email, emailExistsHandler);
      }
    } catch (err) {
      console.log('Auth Screen Error', err.message);
    }
  }, [email]);

  useDidMountEffect(() => {
    try {
      if (checkEmailLoading) {
        setCheckEmailLoading(false);
        if (emailExists) {
          navigation.navigate('PasswordScreen', {email: email});
        } else {
          navigation.navigate('RegisterUserScreen');
        }
      }
    } catch (err) {
      console.log('Auth Screen Error');
    }
  }, [emailExists]);

  useEffect(() => {
    //Cleanup effect
    return () => setCheckEmailLoading(false);
  }, []);

  //UseEffect Ends

  const submitHandler = (values) => {
    if (!checkEmailLoading) {
      // console.log('Check in submitHandler');
      setEmail(values.email);
      setCheckEmailLoading(true);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    // password: Yup.string().required().min(4).label('Password'),
  });

  const emailExistsHandler = (doesEmailExist) => {
    setEmailExists(doesEmailExist);
  };

  return (
    <View style={styles.emailLoginComponentArea}>
      <View style={styles.loginOrSignupTitleText}>
        <ShareActionAreaHeadingText>
          Log in or sign up to Let's Share{' '}
        </ShareActionAreaHeadingText>
      </View>
      <View style={styles.emailInputArea}>
        <Form
          initialValues={{email: ''}}
          onSubmit={submitHandler}
          validationSchema={validationSchema}>
          <Field
            autoCapitalize="none"
            autoCorrect={false}
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="Email"
            name="email"
          />
          <View style={styles.continueButton}>
            <Submit title="Continue" loading={checkEmailLoading} />
          </View>
        </Form>
      </View>
      {/* <View style={styles.centerContent}>
        <BodyTextBold>or</BodyTextBold>
      </View> */}
    </View>
  );
};

export default Component;
