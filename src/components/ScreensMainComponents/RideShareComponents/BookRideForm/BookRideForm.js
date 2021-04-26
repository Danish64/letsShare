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
import {shareRidesData} from 'res/constants/dummyData';

import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

// import {useRoute} from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  seatsAvailable: Yup.string().required().label('Available Seats'),
});

const Component = ({data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log('To book ride data in BookRideForm Component', data);
  const user = useSelector((state) => state.userInformation.user);
  const itemUserId = data._id;

  const sharerId = data.sharerId;
  //   const sharerId = route.params.item._id;
  //console.log('Sharer id', sharerId);

  console.log('ride sharer user id', itemUserId);
  console.log('current user id', user._id);

  const onPressBookRide = async (newData) => {
    console.log('Book Ride Form Screen');

    let data = newData;
    const result = await doPost(
      `v1/nearByRideShares/createNearByRidesSharesBooking/${itemUserId}`,
      data,
    );
    console.log('Booking Ride Api Call', result);
    navigation.navigate('RideShareHome');
  };

  //   const {item} = route.params;
  //   console.log('Data from Create Ride Action Form', route.params.item);
  const submitForm = (values) => {
    // let valID = Math.floor(Math.random() * 100) + 1;
    const newData = {
      // id: Math.floor(Math.random() * 100) + 1,
      //   sharerId: data.sharerId,

      availerId: user._id,
      availerName: user.name,
      availerAddress: 'House 179-C, Street 12, PWD',
      availerPhoneNumber: user.phone,
      availerMessage: values.availerMessage,
      availerSeats: values.seatsAvailable,
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

    // console.log('Booking Ride Request', newData);
    onPressBookRide(newData);
    // updateRides(newData);
  };

  //   const createNearbyRide = async (newRideData) => {
  //     let data = newRideData;
  //     const result = await doPost(
  //       'v1/nearByRideShares/createNearByRideShare',
  //       data,
  //     );
  //     console.log('Data from Create Near by Ride Api', result);
  //     navigation.navigate('CreateRideScreen', newRideData);
  //   };

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
          {/* Seats Available: */}
          <StepperButtonInputField
            title="Select the no of seats you need:"
            name="seatsAvailable"
          />
          {/* <FormField
            title="Pick up Address"
            maxLength={100}
            name="startAddress"
            placeholder="Enter Pickup Address"
            // keyboardType="numeric"
          /> */}
          {/* Start Location */}
          <FormLocation name="startLocation" title="Enter Pickup Location" />
          {/* <FormField
            title="Destination Address"
            maxLength={100}
            name="destinationAddress"
            placeholder="enter complete address"
            // keyboardType="numeric"
          /> */}
          {/* destination Location */}
          <FormLocation
            name="destinationLocation"
            title="Enter DropOff Location Location"
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
            <SubmitButtonPrimary title="Request Ride"></SubmitButtonPrimary>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Component;
