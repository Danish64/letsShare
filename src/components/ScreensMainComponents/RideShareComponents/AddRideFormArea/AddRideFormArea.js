import React, {useState} from 'react';
import * as Yup from 'yup';

import styles from './style';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

import {
  FormByFormik as Form,
  //FormField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
} from 'res/UniversalComponents/Forms.js';

import AddRide from 'res/images/ModulesImages/RideSharingImages/AddRide.png';
import CheckBoxes from 'res/images/ModulesImages/GeneralImages/checkBoxes.png';
import {addRideDummyData} from 'res/constants/dummyData.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  assetName: Yup.string().required().min(1).max(20).label('Ride Name'),
  rideRegistrationNo: Yup.string()
    .required()
    .min(1)
    .max(10)
    .label('Registration No'),
  contactNo: Yup.string().required().max(13).label('Contact No'),
  category: Yup.object().required().nullable().label('Category'),
  // id: Yup.number().label('Id'),
  // selected: Yup.object().required().nullable().label('selected'),
});

const categories = [
  {label: 'Go', value: 1},
  {label: 'Go Plus', value: 2},
  {label: 'Bike', value: 3},
];

const Component = ({route, navigation}) => {
  const submitForm = (values) => {
    values.id = Math.floor(Math.random() * 100) + 1;
    values.selected = false;
    const newData = values;
    console.log(newData);
    updateRides(newData);
  };

  const updateRides = (newData) => {
    const arrayData = addRideDummyData;
    arrayData.push(newData);
    updateUserRides(arrayData);
    navigation.navigate('CreateRideScreen');
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createRideComponentArea}>
        <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={CheckBoxes}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.formArea}>
          <Form
            initialValues={{
              assetName: '',
              rideRegistrationNo: '',
              contactNo: '',
              selected: null,
              id: '',
              //category: null,
            }}
            onSubmit={(values) => {
              submitForm(values);
            }}
            validationSchema={validationSchema}>
            <FormField
              title="Ride Name"
              maxLength={20}
              name="assetName"
              placeholder="Enter the name of your Ride"
            />
            <FormField
              title="Registration No"
              maxLength={20}
              name="rideRegistrationNo"
              placeholder="Enter the registration No of your Ride"
            />

            <FormField
              title="Contact No"
              keyboardType="numeric"
              maxLength={13}
              name="contactNo"
              placeholder="Enter your contact No"
            />
            {/* <FormPicker
              heading="Choose Ride Type"
              icon="keypad-outline"
              items={categories}
              name="category"
              placeholder="Category"
            /> */}
            <View style={styles.submitButtonArea}>
              <SubmitForm title="Add Ride" />
            </View>
          </Form>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;

{
  /* <View style={styles.pngImageAreaLarge}>
          <Image
            resizeMode="contain"
            source={AddRide}
            style={styles.imageContainer}
          />
        </View> */
}
