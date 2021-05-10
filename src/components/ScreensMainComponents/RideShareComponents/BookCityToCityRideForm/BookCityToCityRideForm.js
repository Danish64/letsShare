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
  SubmitButtonPrimary,
} from 'res/UniversalComponents/Forms';

import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const validationSchema = Yup.object().shape({
  seatsAvailable: Yup.string().required().label('Available Seats'),
});

const Component = ({data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log('Ride Detail in Book Ride Form ', data);
  const user = useSelector((state) => state.userInformation.user);

  const shareId = data._id;
  const sharerId = data.sharerId;

  const onPressBookRide = async (newData) => {
    let data = newData;
    const result = await doPost(
      `v1/cityToCityRideShares/createCityToCityRideSharesBooking/${shareId}`,
      data,
    );
    console.log('Booking Ride Api Call', result);
    navigation.navigate('RideShareHome');
  };

  const submitForm = (values) => {
    const newData = {
      availerId: user._id,
      availerName: user.name,
      availerAddress: values.startLocation.data.description,
      availerPhoneNumber: user.phone,
      availerMessage: values.availerMessage,
      availerSeats: values.seatsAvailable.toString(),
      availerPickUpLocation: {
        address: values.startLocation.data.description,
        latitude: values.startLocation.details.geometry.location.lat,
        longitude: values.startLocation.details.geometry.location.lat,
      },
      availerDropOffLocation: {
        address: values.destinationLocation.data.description,
        latitude: values.destinationLocation.details.geometry.location.lat,
        longitude: values.destinationLocation.details.geometry.location.lat,
      },
    };

    onPressBookRide(newData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            seatsAvailable: '',
            startLocation: {},
            destinationLocation: {},
            availerMessage: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          {/* Start Location */}
          <FormLocation name="startLocation" title="Enter Pickup Location" />

          {/* destination Location */}
          <FormLocation
            name="destinationLocation"
            title="Enter DropOff Location Location"
          />
          {/* Seats Available: */}
          <StepperButtonInputField
            title="Select the no of seats you need:"
            name="seatsAvailable"
          />

          <FormField
            title="Message for Sharer (Optional) "
            maxLength={100}
            name="availerMessage"
            placeholder="Enter your message for the sharer"
            // keyboardType="numeric"
          />

          {/* Submit Button */}
          <View style={styles.buttonAreaStyle}>
            <SubmitButtonPrimary title="Send Booking Request"></SubmitButtonPrimary>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Component;
