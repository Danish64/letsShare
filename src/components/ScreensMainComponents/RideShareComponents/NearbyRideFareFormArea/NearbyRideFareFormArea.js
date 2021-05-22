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
  fare: Yup.number().required().min(2).max(4).label('Fare'),
  seatsAvailable: Yup.number()
    .required()
    .min(1)
    .max(3)
    .label('Available Seats'),
  fareRate: Yup.number().required().min(1).max(4).label('Fare Rate'),
});

const categories = [
  {label: 'Charge Per Kilometre', name: 'chargePerKm', value: 1},
  {label: 'Charge Per Hour', name: 'chargePerHour', value: 2},
  {
    label: 'Charge Per Distance Traveled',
    name: 'chargePerDP',
    value: 3,
  },
];

const Component = ({Data}) => {
  const ref = useRef();

  const [view, setView] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {rideDetail} = route.params;
  const ride = rideDetail;

  const submitForm = (values) => {
    const newData = {
      sharerId: ride.ownerId,
      rideName: ride.rideName,
      registrationNumber: ride.registrationNumber,
      ownerContactNumber: ride.ownerContactNumber,
      rideType: ride.rideType,
      ridePictures: ride.ridePictures,

      startLocation: {
        address: ride.startLocation.data.description,
        latitude: ride.startLocation.details.geometry.location.lat,
        longitude: ride.startLocation.details.geometry.location.lat,
      },
      destinationLocation: {
        address: ride.destinationLocation.data.description,
        latitude: ride.destinationLocation.details.geometry.location.lat,
        longitude: ride.destinationLocation.details.geometry.location.lat,
      },
      startAddress: ride.startAddress,
      destinationAddress: ride.destinationAddress,
      fare: values.fare,
      seatsAvailable: values.seatsAvailable.toString(),
    };

    createNearbyRide(newData);
  };

  const createNearbyRide = async (newRideData) => {
    let data = newRideData;
    const result = await doPost(
      'v1/nearByRideShares/createNearByRideShare',
      data,
    );
    navigation.navigate('CreateRideScreen', newRideData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          innerRef={ref}
          initialValues={{
            fare: '',
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
          {/* Input Fare */}

          <FormField
            title="Total Fare"
            maxLength={100}
            name="fare"
            placeholder="e.g 500 Rs."
            keyboardType="numeric"
          />
          <FormPicker
            heading="Choose Fare Method"
            name="fareMethod"
            icon="keypad-outline"
            items={categories}
            placeholder="Choose Fare Rate Method"
          />
          <View style={{marginBottom: 30}} />

          <FormField
            title="Fare Rate"
            maxLength={4}
            keyboardType="numeric"
            name="fareRate"
            placeholder="Enter Fare Rate in Rs e.g 10"
          />

          {/* Submit Button */}
          <View style={styles.buttonAreaStyle}>
            <SubmitForm title="Share Ride"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Component;
