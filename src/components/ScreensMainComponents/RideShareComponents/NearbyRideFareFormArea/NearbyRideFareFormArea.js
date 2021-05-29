import React, {useState, useRef, useEffect} from 'react';
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import styles from './style';
import * as Yup from 'yup';

import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
  FormLocation,
} from 'res/UniversalComponents/Forms';

import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

const validationSchema = Yup.object().shape({
  // totalFare: Yup.string().required().min(3).max(5).label('Total Fare'),
  seatsAvailable: Yup.number()
    .required()
    .min(1)
    .max(3)
    .label('Available Seats'),
  fareMethod: Yup.object().required().nullable().label('Fare Method'),
});

const categories = [
  {label: 'Charge Per Kilometre', name: 'chargePerKm', value: 1},
  {
    label: 'Charge Per Distance Traveled',
    name: 'chargePerDP',
    value: 2,
  },
];

const Component = ({Data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {rideDetail} = route.params;
  const ride = rideDetail;

  const submitForm = (values) => {
    const rideDetailContinue = {
      sharerId: ride.sharerId,
      rideName: ride.rideName,
      registrationNumber: ride.registrationNumber,
      ownerContactNumber: ride.ownerContactNumber,
      rideType: ride.rideType,
      ridePictures: ride.ridePictures,

      startLocation: {
        address: ride.startLocation.address,
        latitude: ride.startLocation.latitude,
        longitude: ride.startLocation.longitude,
      },
      destinationLocation: {
        address: ride.destinationLocation.address,
        latitude: ride.destinationLocation.latitude,
        longitude: ride.destinationLocation.longitude,
      },
      startAddress: ride.startAddress,
      destinationAddress: ride.destinationAddress,
      seatsAvailable: values.seatsAvailable.toString(),
      fareMethod: values.fareMethod.name,
    };

    navigation.navigate('NearbyRideFareContinueScreen', {
      rideDetail: rideDetailContinue,
    });
  };

  return (
    <View style={styles.ComponentArea}>
      <Form
        initialValues={{
          seatsAvailable: '',
          fareMethod: '',
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={validationSchema}>
        {/* Seats Available: */}
        <StepperButtonInputField
          title="Total Seats Available:"
          name="seatsAvailable"
        />
        <View style={{marginBottom: 30}} />

        <FormPicker
          heading="Choose Fare Method"
          name="fareMethod"
          icon="keypad-outline"
          items={categories}
          placeholder="Choose Fare Rate Method"
        />
        <View style={{marginBottom: 30}} />

        {/* Submit Button */}
        <View style={styles.buttonAreaStyle}>
          <SubmitForm title="Next"></SubmitForm>
        </View>
      </Form>
    </View>
  );
};
export default Component;
