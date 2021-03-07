import React from 'react';
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
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
import {shareRidesData} from 'res/constants/dummyData';

const Component = ({navigation, Data}) => {
  const submitForm = (values) => {
    let valID = Math.floor(Math.random() * 100) + 1;
    const newData = {
      id: valID,
      rideName: Data.rideName,
      registrationNo: Data.registrationNo,
      contactNumber: Data.contactNumber,
      rideType: 'Nearby Ride',
      image: Data.image,
      fare: values.fare,
      seatsAvailable: values.seatsAvailable,
      startLocation: values.startLocation,
      destinationLocation: values.destinationLocation,
      listFor: values.listFor,
    };
    console.log(newData);
    updateRides(newData);
  };

  const updateRides = (newData) => {
    shareRidesData.push(newData);
    navigation.navigate('RideShareHome', newData);
  };

  console.log(JSON.stringify(Data));

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            fare: '',
            seatsAvailable: '',
            listFor: '',
            startLocation: {},
            destinationLocation: {},
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}>
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

          {/* Start Location */}
          <FormLocation name="startLocation" title="Start Location" />

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
