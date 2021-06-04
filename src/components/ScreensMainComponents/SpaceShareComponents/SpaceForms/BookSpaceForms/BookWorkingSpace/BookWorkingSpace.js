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
import {doPost} from '../../../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';

const Component = ({data}) => {
  const validationSchema = Yup.object().shape({
    // availerMessage: Yup.string().required().min(5).label('Your Message'),
    availerSeats: Yup.number()
      .required()
      .min(1)
      .max(data.seatsAvailable)
      .label('Seats'),
    availerDesks: Yup.number()
      .required()
      .min(1)
      .max(data.desksAvailable)
      .label('Desks'),

    availerRooms: Yup.number()
      .required()
      .min(1)
      .max(data.roomsAvailable)
      .label('Rooms'),
  });
  const navigation = useNavigation();
  const route = useRoute();
  const user = useSelector((state) => state.userInformation.user);

  const shareId = data._id;
  const sharerId = data.sharerId;

  const onPressBookRide = async (newData) => {
    let data = newData;
    const result = await doPost(
      `v1/workingSpaceShares/createWorkingSpaceShareBooking/${shareId}`,
      data,
    );
    console.log('Booking Ride Api Call', result);
    navigation.navigate('SpaceShareHome');
  };

  const submitForm = (values) => {
    const newData = {
      availerId: user._id,
      availerName: user.name,
      availerAddress: values.availerLocation.data.description,
      availerPhoneNumber: user.phone,
      availerMessage: values.availerMessage,
      availerSeats: values.availerSeats,
      availerDesks: values.availerDesks,
      availerRooms: values.availerRooms,
    };

    onPressBookRide(newData);
  };

  return (
    <ScrollViewContainer>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            availerMessage: '',
            availerLocation: {},
            availerSeats: '',
            availerDesks: '',
            availerRooms: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          // validationSchema={validationSchema}
        >
          <FormLocation name="availerLocation" />
          <StepperButtonInputField
            title="Enter your required Seats:"
            name="availerSeats"
          />
          <Text>{'Total Seats Available :' + data.seatsAvailable}</Text>

          <StepperButtonInputField
            title="Enter your required Desks:"
            name="availerDesks"
          />
          <Text>{'Total Desks Available :' + data.desksAvailable}</Text>

          <StepperButtonInputField
            title="Enter your required Rooms:"
            name="availerRooms"
          />
          <Text>{'Total Rooms Available :' + data.roomsAvailable}</Text>

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
    </ScrollViewContainer>
  );
};
export default Component;
