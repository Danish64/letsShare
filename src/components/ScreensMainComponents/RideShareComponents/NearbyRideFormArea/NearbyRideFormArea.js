import React from 'react';
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
import {shareRidesData} from 'res/constants/dummyData';

import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {doPost} from '../../../../utils/AxiosMethods';

// import {useRoute} from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  fare: Yup.string().required().min(3).max(5).label('Fare'),
  seatsAvailable: Yup.string().required().label('Available Seats'),
});

const Component = ({Data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  console.log('Data from Create Ride Action Form', route.params.item);
  const submitForm = (values) => {
    // let valID = Math.floor(Math.random() * 100) + 1;
    const newData = {
      // id: Math.floor(Math.random() * 100) + 1,
      sharerId: item.ownerId,
      rideName: item.rideName,
      registrationNumber: item.registrationNumber,
      ownerContactNumber: item.ownerContactNumber,
      rideType: item.rideType,
      image: '',
      fare: values.fare,
      seatsAvailable: values.seatsAvailable.toString(),
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
      startAddress: values.startAddress,
      destinationAddress: values.destinationAddress,
    };
    console.log(newData);
    createNearbyRide(newData);
    // updateRides(newData);
  };

  const createNearbyRide = async (newRideData) => {
    let data = newRideData;
    const result = await doPost(
      'v1/nearByRideShares/createNearByRideShare',
      data,
    );
    console.log('Data from Create Near by Ride Api', result);
    navigation.navigate('CreateRideScreen', newRideData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            fare: '',
            seatsAvailable: '',
            startAddress: '',
            destinationAddress: '',
            startLocation: {},
            destinationLocation: {},
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
          <FormField
            title="Start Address"
            maxLength={100}
            name="startAddress"
            placeholder="enter complete address"
            // keyboardType="numeric"
          />
          {/* Start Location */}
          <FormLocation name="startLocation" title="startLocation" />
          <FormField
            title="Destination Address"
            maxLength={100}
            name="destinationAddress"
            placeholder="enter complete address"
            // keyboardType="numeric"
          />
          {/* destination Location */}
          <FormLocation
            name="destinationLocation"
            title="Destination Location"
          />

          {/* Input List For:
          <StepperButtonInputField title="List For(days):" name="listFor" /> */}

          {/* Submit Button */}
          <View style={styles.buttonAreastyle}>
            <SubmitForm title="Share"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Component;
