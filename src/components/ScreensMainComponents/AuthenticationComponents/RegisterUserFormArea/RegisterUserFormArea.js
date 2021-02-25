import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
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
import {useFormikContext} from 'formik';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [date, setDate] = useState(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });
  const submitHandler = (values) => {
    values.myDate = date;
    console.log(values);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const getDate = moment(date).format('YYYY-MM-DD');
    setDate(getDate);
    hideDatePicker();
  };

  return (
    <View style={styles.emailLoginComponentArea}>
      <View style={styles.loginOrSignupTitleText}>
        <ShareActionAreaHeadingText>
          Register to Let's Share
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.emailInputArea}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            myDate: date,
            email: '',
            password: '',
          }}
          onSubmit={submitHandler}
          validationSchema={validationSchema}>
          {(values) => (
            <>
              <Field
                autoCapitalize="words"
                autoCorrect={false}
                // icon="mail-outline"
                type="name"
                placeholder="First Name"
                name="firstName"
              />
              <Field
                autoCapitalize="words"
                autoCorrect={false}
                // icon="mail-outline"
                type="name"
                placeholder="Last Name"
                name="lastName"
              />
              <Field
                value={date}
                icon="calendar-outline"
                name="myDate"
                showDate={showDatePicker}
                placeholder="Date Of Birth"
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                //  date={moment(values.myDate).toDate()}
              />

              <Field
                autoCapitalize="none"
                autoCorrect={false}
                icon="mail-outline"
                type="email"
                keyboardType="email-address"
                placeholder="Email"
                name="email"
              />
              <Field
                autoCapitalize="none"
                autoCorrect={false}
                icon="key-outline"
                placeholder="Password"
                name="password"
                secureTextEntry
              />
              {/* <Field
                autoCapitalize="none"
                autoCorrect={false}
                icon="call-outline"
                placeholder="Contact No"
                name="contact"
              /> */}
              <View style={styles.continueButton}>
                <Submit title="Register" />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Component;
