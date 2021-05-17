import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
import {
  FormByFormik as Form,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';
import {useSelector} from 'react-redux';
import {doPost} from '../../../../../../utils/AxiosMethods';

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  spaceName: Yup.string().required().min(5).max(15).label('Space Name'),
  ownerContactNo: Yup.string().required().min(11).label('Contact No'),
});

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  const submitForm = (values) => {
    const newSpace = {
      ownerId: user._id,
      rideName: values.rideName,
      registrationNumber: values.registrationNo,
      rideType: values.rideType.label,
      ownerContactNumber: values.contactNo,
    };
    addNewSpace(newSpace);
  };

  const addNewSpace = async (newSpace) => {
    const result = await doPost('Add URL Here', newSpace);
    console.log('Data from Ride Api', result);
    navigation.navigate('CreateSpace', newSpace);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createSpaceComponentArea}>
        <Form
          initialValues={{
            spaceName: '',
            ownerContactNo: '',
            image: [],
          }}
          onSubmit={(values) => {
            submitForm(values);
            // console.log(values);
          }}
          validationSchema={validationSchema}>
          {/* Input image */}
          <FormImagePicker name="image" />

          {/* Input Space Name */}
          <FormField
            title="Space Name"
            maxLength={20}
            name="spaceName"
            placeholder="Enter your space name. e.g; DHA Flat"
          />

          {/* Input Space Owner Contact No */}
          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="ownerContactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />

          {/* Submit Form */}
          <View style={styles.submitButtonArea}>
            <SubmitForm title="Add Ride"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
