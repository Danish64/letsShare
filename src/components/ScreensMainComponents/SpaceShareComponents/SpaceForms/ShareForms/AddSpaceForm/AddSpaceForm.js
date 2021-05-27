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
  FormLocation,
} from 'res/UniversalComponents/Forms';
import {useSelector} from 'react-redux';
import {doPost} from '../../../../../../utils/AxiosMethods';

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  spaceTitle: Yup.string().required().min(5).max(15).label('Space Title'),
  spaceDescription: Yup.string()
    .required()
    .min(3)
    .max(100)
    .label('Space Description'),
  spaceSpecifications: Yup.string()
    .required()
    .min(3)
    .max(100)
    .label('Space Specifications'),
  ownerContactNo: Yup.string().required().min(11).label('Contact No'),
});

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  const submitForm = (values) => {
    console.log('In Submit form');
    const newSpace = {
      ownerId: user._id,
      ownerContactNumber: values.contactNo,
      spaceTitle: values.spaceTitle,
      spaceType: values.spaceType.label,
      spaceSpecifications: values.spaceSpecs,
      spaceDescription: values.spaceDescription,
      spaceLocation: {
        address: values.spaceLocation.data.description,
        latitude: values.spaceLocation.details.geometry.location.lat,
        longitude: values.spaceLocation.details.geometry.location.lng,
      },
      spacePictures: values.image,
    };
    addNewSpace(newSpace);
  };

  const addNewSpace = async (newSpace) => {
    console.log('New Space', newSpace);
    const result = await doPost('v1/userSpaces/createSpace', newSpace);
    console.log('Data from Space Api', result);
    navigation.navigate('CreateSpaceShare', newSpace);
  };

  const spaceTypes = [
    {label: 'Residence', value: 1},
    {label: 'Working', value: 2},
    {label: 'Event', value: 3},
    {label: 'Storage', value: 4},
    {label: 'Parking', value: 5},
  ];

  return (
    <KeyboardAvoidingView>
      <View style={styles.createSpaceComponentArea}>
        <Form
          initialValues={{
            ownerId: '',
            ownerContactNumber: '',
            spaceTitle: '',
            spaceType: '',
            spaceSpecifications: '',
            spaceDescription: '',
            spaceLocation: {},
            spacePictures: [],
          }}
          onSubmit={(values) => {
            console.log('In Submit form');
            submitForm(values);
            // console.log(values);
          }}
          // validationSchema={validationSchema}
        >
          {/* Input image */}
          <FormImagePicker name="image" />

          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="contactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />

          {/* Input Space Name */}
          <FormField
            title="Space Title"
            maxLength={20}
            name="spaceTitle"
            placeholder="Enter space title e.g DHA Flat"
          />

          <FormPicker
            heading="Space Type"
            name="spaceType"
            icon="keypad-outline"
            items={spaceTypes}
            placeholder="Choose Space Type"
          />

          <FormField
            title="Space Address"
            maxLength={100}
            name="spaceAddress"
            placeholder="Enter Address"
            // keyboardType="numeric"
          />

          <FormLocation name="spaceLocation" title="Set Space Location" />

          <FormField
            title="Space Specifications"
            maxLength={100}
            name="spaceSpecs"
            placeholder="Enter Space Specifications e.g 3 rooms..."
          />

          <FormField
            title="Space Description"
            maxLength={100}
            name="spaceDescription"
            placeholder="Enter Space Description e.g Hill view with..."
          />

          {/* Submit Form */}
          <View style={styles.submitButtonArea}>
            <SubmitForm title="Add Space"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
