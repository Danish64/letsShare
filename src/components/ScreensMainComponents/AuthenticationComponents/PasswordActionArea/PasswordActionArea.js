import React, {useState, useContext} from 'react';
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

const Component = ({navigation, route}) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string().required().min(4).label('Password'),
  });

  const submitHandler = (values) => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={styles.emailLoginComponentArea}>
      <View style={styles.loginOrSignupTitleText}>
        <ShareActionAreaHeadingText>Enter Password </ShareActionAreaHeadingText>
      </View>
      <View style={styles.emailInputArea}>
        <Form
          initialValues={{password: ''}}
          onSubmit={submitHandler}
          validationSchema={validationSchema}>
          <Field
            autoCapitalize="none"
            autoCorrect={false}
            icon="key-outline"
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          <View style={styles.continueButton}>
            <Submit title="Login" />
          </View>
        </Form>
      </View>
    </View>
  );
};

export default Component;
