import React, {useState} from 'react';
import {View, KeyboardAvoidingView, TextInput, Image} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
import {
  FormByFormik as Form,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';
import {addRideDummyData} from 'res/constants/dummyData';

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  rideName: Yup.string().required().min(3).max(15).label('Ride Name'),
  registrationNo: Yup.string()
    .required()
    .min(4)
    .max(10)
    .label('Registration No'),
  contactNo: Yup.string().required().min(11).label('Contact No'),
  //category: Yup.object().required().nullable().label('Category'),
});

// const categories = [
//   {label: 'Car', value: 1},
//   {label: 'Bike', value: 2},
// ];

const Component = ({navigation}) => {
  const submitForm = (values) => {
    values.id = Math.floor(Math.random() * 100) + 1;
    values.selected = false;
    const newData = values;
    updateRides(newData);
  };

  const updateRides = (newData) => {
    addRideDummyData.unshift(newData);
    navigation.navigate('CreateRideScreen', newData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createRideComponentArea}>
        <Form
          initialValues={{
            rideName: '',
            registrationNo: '',
            contactNo: '',
            // category: null,
            selected: null,
            image: [],
            id: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
            console.log(values);
          }}
          validationSchema={validationSchema}>
          {/* Input image */}
          <FormImagePicker name="image" />

          {/* Input Ride Name */}
          <FormField
            title="Ride Name"
            maxLength={20}
            name="rideName"
            placeholder="Enter your ride name. e.g; Honda City"
          />

          {/* Input Ride Registartion No */}
          <FormField
            title="Registration No"
            maxLength={10}
            name="registrationNo"
            placeholder="Enter Ride Registration No. e.g; LES-1020"
          />

          {/* Input Ride Owner Contact No */}
          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="contactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />
          {/* <FormPicker
            heading="Choose Category"
            name="category"
            icon="keypad-outline"
            items={categories}
            placeholder="Category"
          /> */}

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
