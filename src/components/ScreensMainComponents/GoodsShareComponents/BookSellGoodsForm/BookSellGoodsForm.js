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

const Component = ({data}) => {
  const validationSchema = Yup.object().shape({
    availerQuantity: Yup.number()
      .required()
      .min(1)
      .max(data.quantity)
      .label('Quantity'),
    availerMessage: Yup.string().required().min(10).label('Message'),
  });

  const navigation = useNavigation();
  const route = useRoute();
  const user = useSelector((state) => state.userInformation.user);

  const shareId = data._id;
  const sharerId = data.sharerId;

  const onPressSendRequest = async (newData) => {
    let availerBookingData = newData;
    const result = await doPost(
      `v1/goodShares/createGoodShareBooking/${shareId}`,
      availerBookingData,
    );
    console.log('Booking Ride Api Call', result);
    navigation.navigate('GoodsShareHome');
  };

  const submitForm = (values) => {
    const newData = {
      availerId: user._id,
      availerName: user.name,
      availerAddress: values.availerLocation.data.description,
      availerPhoneNumber: user.phone,
      availerQuantity: values.availerQuantity,
      availerMessage: values.availerMessage,
    };

    onPressSendRequest(newData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            availerQuantity: '',
            availerMessage: '',
            availerLocation: {},
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          {/* Availer Location */}
          <FormLocation name="availerLocation" title="Enter Your Location" />

          {/* Availer Quantity: */}
          <StepperButtonInputField
            title="Select the quantity you need:"
            name="availerQuantity"
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
