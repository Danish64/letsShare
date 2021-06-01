import React, {useState, useEffect} from 'react';
import {View, Image, Button} from 'react-native';
import {
  SubtitleTextCapitalizedBold,
  BodyText,
} from 'res/UniversalComponents/Text.js';
import * as Yup from 'yup';

import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';

import {TextButton} from 'res/UniversalComponents/Button.js';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

//For Redux
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
  doGet,
  doPost,
  doPutAws,
  doPostWithoutBody,
} from '../../../../utils/AxiosMethods';
import {cos} from 'react-native-reanimated';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().min(3).max(30).label('Name'),
  city: Yup.string().required().min(1).max(30).label('City'),
  streetAddress: Yup.string()
    .required()
    .min(4)
    .max(100)
    .label('Street Address'),
  contactNo: Yup.string().required().min(11).max(13).label('Contact No'),
});

const Component = ({userInfo}) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  let user = userInfo.user;
  const userId = user._id;
  console.log(userId);

  const submitForm = async (values) => {
    if (values.image != '') {
      const data = {
        id: userId,
        picUri: values.image,
      };
      const result = await doPutAws(data, 'v1/users/updateProfilePicture');
      console.log(result);
    }
    if (values.city != '') {
      const data = {
        id: userId,
        city: values.city,
      };
      const result = await doPutAws(data, 'v1/users/updateUserCity');
      console.log(result);
    }
    if (values.userName != '') {
      const data = {
        id: userId,
        name: values.userName,
      };
      const result = await doPutAws(data, 'v1/users/updateUserName');
      console.log(result);
    }
    if (values.streetAddress != '') {
      const data = {
        id: userId,
        homeAddress: {
          house: '',
          street: values.streetAddress,
          province: 'Punjab',
        },
      };
      const result = await doPutAws(data, 'v1/users/updateUserHomeAddress');
      console.log(result);
    }
    if (values.contactNo != '') {
      const data = {
        id: userId,
        phone: values.contactNo,
      };
      const result = await doPutAws(data, 'v1/users/updateUserPhone');
      console.log(result);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.ProfileSetupComponentArea}>
      <Form
        initialValues={{
          userName: '',
          city: '',
          image: '',
          streetAddress: '',
          contactNo: '',
        }}
        onSubmit={(values) => {
          // console.log('values', values);
          submitForm(values);
        }}
        // validationSchema={validationSchema}
      >
        <FormImagePicker name="image" />

        <FormField title="Name" name="userName" placeholder="e.g. Asad Baig" />

        <FormField
          title="Street Address"
          name="streetAddress"
          placeholder="e.g. street 61 g11/4,"
        />
        <FormField title="City" name="city" placeholder="e.g. Islamabad" />

        <FormField
          title="Contact"
          maxLength={13}
          keyboardType="numeric"
          name="contactNo"
          placeholder="Enter Contact No. e.g; 03367676767"
        />

        <View style={styles.submitButtonArea}>
          <SubmitForm title="Save Changes"></SubmitForm>
        </View>
      </Form>
    </View>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
