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

import {useRoute} from '@react-navigation/native';
import useDidMountEffect from '../../../../services/CustomHooks/useDidMountEffect';
import {useNavigation} from '@react-navigation/native';

//For Redux
import {connect, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginRequest, signupRequest} from '../../../../ducks/actions';
import axios from 'axios';
import {doPost, doPostWithTokenResponse} from '../../../../utils/AxiosMethods';
// Import Ends

const Component = ({signupRequest, userInfo}) => {
  const navigation = useNavigation();
  const [authLoading, setAuthLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    contact: Yup.string().required().min(10).max(13).label('Contact No'),
  });

  //useEffects for life cycles

  useDidMountEffect(() => {
    try {
      if (userData) {
        console.log('User Data After Clicking Register', userData);
        setAuthLoading(true);
        signupRequest(userData);
      }
    } catch (err) {
      console.log('Register Screen Error', err.message);
    }
  }, [userData]);

  useDidMountEffect(() => {
    setAuthLoading(false);
    try {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (err) {}
  }, [userInfo.user]);

  //useEffects Ends

  const submitHandler = async (values) => {
    const name = `${values.firstName} ${values.lastName}`;
    const user = {
      name: name,
      email: values.email,
      password: values.password,
      phone: values.contact,
      city: 'Not Provided',
      gender: 'male',
      homeAddress: {
        house: '',
        street: '',
        province: '',
      },
      workAddress: {
        house: '',
        street: '',
        province: '',
      },
      sharedAssets: {
        sharedSpaces: [],
        sharedRides: [],
        sharedFoods: [],
        sharedGoods: [],
      },

      availedAssets: {
        availedSpaces: [],
        availedRides: [],
        availedFoods: [],
        availedGoods: [],
      },
      reviews: [],
    };
    setUserData(user);
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
    console.log('date in handle confirm', date);
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
            // myDate: date,
            email: '',
            password: '',
            contact: '',
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
              {/* <Field
                value={date}
                icon="calendar-outline"
                name="myDate"
                showDate={showDatePicker}
                placeholder="Date Of Birth"
              /> */}
              {/* <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                //  date={moment(values.myDate).toDate()}
              /> */}

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
              <Field
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                icon="call-outline"
                placeholder="Contact No"
                name="contact"
              />
              <View style={styles.continueButton}>
                <Submit title="Register" loading={authLoading} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  signupRequest: bindActionCreators(signupRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);

// export default Component;
