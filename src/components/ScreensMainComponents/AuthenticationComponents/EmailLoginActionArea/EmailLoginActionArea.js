import React, {useState} from 'react';
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

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    // password: Yup.string().required().min(4).label('Password'),
  });

  const submitHandler = (values) => {
    display(values);

    navigation.navigate('Home');
  };
  const display = (values) => {
    console.log(values.email);
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
          onSubmit={(values) => submitHandler(values)}
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
            <Submit title="Continue" />
          </View>
        </Form>
      </View>
      <View style={styles.centerContent}>
        <BodyTextBold>or</BodyTextBold>
      </View>
    </View>
  );
};

export default Component;
