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
import {TextInputTitleText} from 'res/UniversalComponents/Text.js';

import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

const validationSchema = Yup.object().shape({
  fareRate: Yup.number().required().label('Fare Rate'),
});

const Component = ({Data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {rideDetail} = route.params;
  const ride = rideDetail;
  console.log('fare continue screen', ride.fareMethod);

  const submitForm = (values) => {
    const newData = {
      sharerId: ride.sharerId,
      rideName: ride.rideName,
      registrationNumber: ride.registrationNumber,
      ownerContactNumber: ride.ownerContactNumber,
      rideType: ride.rideType,
      ridePictures: ride.ridePictures,

      startLocation: {
        address: ride.startLocation.address,
        latitude: ride.startLocation.latitude,
        longitude: ride.startLocation.latitude,
      },
      destinationLocation: {
        address: ride.destinationLocation.address,
        latitude: ride.destinationLocation.latitude,
        longitude: ride.destinationLocation.latitude,
      },
      startAddress: ride.startAddress,
      destinationAddress: ride.destinationAddress,
      seatsAvailable: ride.seatsAvailable,
      fareMethod: ride.fareMethod,
      fareRate: values.fareRate,
    };

    createNearbyRide(newData);
  };

  const createNearbyRide = async (newRideData) => {
    let data = newRideData;
    const result = await doPost(
      'v1/nearByRideShares/createNearByRideShare',
      data,
    );
    console.log(result);
    navigation.navigate('CreateRideScreen', newRideData);
  };

  return (
    <View style={styles.ComponentArea}>
      {ride.fareMethod === 'chargePerKm' && (
        <TextInputTitleText>Enter Fare Per KM</TextInputTitleText>
      )}
      {ride.fareMethod === 'chargePerHour' && (
        <TextInputTitleText>Enter Fare Per Hour</TextInputTitleText>
      )}
      {ride.fareMethod === 'chargePerDP' && (
        <TextInputTitleText>Enter Total Fare </TextInputTitleText>
      )}

      <Form
        initialValues={{
          fareRate: '',
        }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validationSchema={validationSchema}>
        <FormField
          maxLength={4}
          keyboardType="numeric"
          name="fareRate"
          placeholder="Enter Fare Rate in Rs"
        />

        {/* Submit Button */}
        <View style={styles.buttonAreaStyle}>
          <SubmitForm title="Share Ride"></SubmitForm>
        </View>
      </Form>
    </View>
  );
};
export default Component;
