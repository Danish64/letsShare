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
    availerBeds: Yup.number()
      .required()
      .min(1)
      .max(data.bedsAvailable)
      .label('Total beds'),
    availerRooms: Yup.number()
      .required()
      .min(1)
      .max(data.roomsAvailable)
      .label('Available rooms'),
  });
  const navigation = useNavigation();
  const route = useRoute();
  const user = useSelector((state) => state.userInformation.user);
  console.log(data.singleShareAbleUnit);

  const shareId = data._id;
  const sharerId = data.sharerId;

  const onPressBookRide = async (newData) => {
    let data = newData;
    const result = await doPost(
      `v1/residenceSpaceShares/createResidenceSpaceShareBooking/${shareId}`,
      data,
    );
    console.log('Booking Ride Api Call', result);
    navigation.navigate('SpaceShareHome');
  };

  const submitForm = (values) => {
    let availerQuantity = {};
    if (data.singleShareAbleUnit === 'house') {
      availerQuantity = {isAvailingWhole: true};
    } else if (data.singleShareAbleUnit === 'room') {
      availerQuantity = {
        availerRooms: values.availerRooms,
      };
    } else {
      availerQuantity = {
        availerBeds: values.availerBeds,
      };
    }

    const newData = {
      ...availerQuantity,
      availerId: user._id,
      availerName: user.name,
      availerAddress: values.availerLocation.data.description,
      availerPhoneNumber: user.phone,
      availerMessage: values.availerMessage,
    };
    // console.log(newData);

    onPressBookRide(newData);
  };

  const categories = [
    {label: 'true', value: 1},
    {label: 'false', value: 2},
  ];

  return (
    <ScrollViewContainer>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            availerMessage: '',
            availerLocation: {},
            availerBeds: '',
            availerRooms: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          // validationSchema={validationSchema}
        >
          {/* Start Location */}
          <FormLocation name="availerLocation" title="Enter your Location" />

          <FormField
            title="Message for Sharer (Optional) "
            maxLength={100}
            name="availerMessage"
            placeholder="Enter your message for the sharer"
            // keyboardType="numeric"
          />

          {data.singleShareAbleUnit == 'bed' && (
            <>
              <StepperButtonInputField
                title="Enter your required beds:"
                name="availerBeds"
                // placeholder={'Total ' + data.bedsAvailable + 'Beds Available'}
              />
              <Text>{'Total ' + data.bedsAvailable + ' beds Available'}</Text>
            </>
          )}

          {data.singleShareAbleUnit == 'room' && (
            <>
              <StepperButtonInputField
                title="Enter your required rooms:"
                name="availerRooms"
                // placeholder={'Total ' + data.bedsAvailable + 'Beds Available'}
              />
              <Text>{'Total ' + data.roomsAvailable + ' rooms Available'}</Text>
            </>
          )}

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
