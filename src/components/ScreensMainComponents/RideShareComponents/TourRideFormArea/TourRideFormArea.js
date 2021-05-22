import React from 'react';
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
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
  fare: Yup.string().required().min(3).max(5).label('Fare'),
  seatsAvailable: Yup.number().required().min(1).label('Available Seats'),
  departureDate: Yup.string().required().label('Departure Date'),
  returnDate: Yup.string().required().label('Return Date'),
  departureTime: Yup.string().required().label('Departure Time'),
  tourDays: Yup.string().required().min(1).max(2).label('Tour Days'),
});

const Component = ({Data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;

  const submitForm = (values) => {
    const newData = {
      sharerId: item.ownerId,
      rideName: item.rideName,
      registrationNumber: item.registrationNumber,
      rideType: item.rideType,
      ownerContactNumber: item.ownerContactNumber,
      ridePictures: item.ridePictures,
      startLocation: {
        address: values.startLocation.data.description,
        latitude: values.startLocation.details.geometry.location.lat,
        longitude: values.startLocation.details.geometry.location.lat,
      },
      destinationLocation: {
        address: values.destinationLocation.data.description,
        latitude: values.destinationLocation.details.geometry.location.lat,
        longitude: values.destinationLocation.details.geometry.location.lat,
      },
      fare: values.fare,
      seatsAvailable: values.seatsAvailable.toString(),
      departureDate: values.departureDate,
      returnDate: values.returnDate,
      departureTime: values.departureTime,
      tourInfo: values.tourInfo,
      tourDays: values.tourDays,
      booking: [],
    };
    createTourRide(newData);
  };

  const createTourRide = async (newRideData) => {
    let data = newRideData;
    const result = await doPost('v1/tourRideShares/createTourRideShare', data);
    console.log('Data from Create Near by Ride Api', result);
    navigation.navigate('CreateRideScreen', newRideData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            startLocation: {},
            destinationLocation: {},
            fare: '',
            seatsAvailable: '',
            departureDate: '',
            returnDate: '',
            departureTime: '',
            tourInfo: '',
            tourDays: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          {/* Input Fare */}
          <FormField
            title="Fare"
            maxLength={100}
            name="fare"
            placeholder="e.g 500 Rs."
            keyboardType="numeric"
          />
          {/* Seats Available: */}
          <StepperButtonInputField
            title="Seats Available:"
            name="seatsAvailable"
          />

          {/* Departure Date */}
          <FormField
            title="Departure Date"
            maxLength={100}
            name="departureDate"
            placeholder="e.g March 30, 2021"
          />
          {/* Return Date */}
          <FormField
            title="Return Date"
            maxLength={50}
            name="returnDate"
            placeholder="e.g April 4, 2021"
          />

          {/* Departure Time */}
          <FormField
            title="Departure Time"
            maxLength={100}
            name="departureTime"
            placeholder="e.g 5pm"
          />

          {/* Tour Info */}
          <FormField
            title="Tour Info"
            maxLength={100}
            name="tourInfo"
            placeholder="e.g It will be a 6 days tour"
          />

          {/* Tour Days */}
          <FormField
            title="Tour Days"
            keyboardType="numeric"
            maxLength={2}
            name="tourDays"
            placeholder="e.g 6 "
          />

          {/* Start Location */}
          <FormLocation name="startLocation" title="Start Location" />

          {/* destination Location */}
          <FormLocation
            name="destinationLocation"
            title="Destination Location"
          />

          {/* Submit Button */}
          <View style={styles.buttonAreastyle}>
            <SubmitForm title="Share Ride"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Component;
