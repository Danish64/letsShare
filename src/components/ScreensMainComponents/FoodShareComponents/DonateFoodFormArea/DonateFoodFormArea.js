import React, {useState} from 'react';
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import * as Yup from 'yup';

//Native Exports Ends Here

//Third Party Exports Starts

import styles from './style';
import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
  FormLocation,
} from '../../../../res/UniversalComponents/Forms';
import SetLocation from '../../../GeneralComponents/SetLocation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  pickUpTime: Yup.string().required().min(3).max(20).label('Pickup Time'),
  listForDays: Yup.string().required().min(1).max(3).label('Listing Days'),
  deliveryInfo: Yup.string().required().max(100).label('Delivery Info'),
});

const Component = ({navigation, Data}) => {
  const route = useRoute();
  const {item} = route.params;
  const submitForm = (values) => {
    const newData = {
      sharerId: item.ownerId,
      shareMessage: values.shareMessage,
      title: item.title,
      description: item.description,
      quantity: item.quantity,
      ownerContactNumber: item.ownerContactNumber,
      images: item.images,
      shareType: 'donate',
      deliveryInfo: values.deliveryInfo,
      listForDays: values.listForDays,
      pickUpLocation: {
        address: values.pickUpLocation.data.description,
        latitude: values.pickUpLocation.details.geometry.location.lat,
        longitude: values.pickUpLocation.details.geometry.location.lng,
      },
      pickUpTime: values.pickUpTime,
    };
    createFoodShare(newData);
  };

  const createFoodShare = async (donateFoodShare) => {
    let data = donateFoodShare;
    const result = await doPost('v1/foodShares/createFoodShare', data);
    navigation.navigate('CreateFoodScreen', donateFoodShare);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.donateFoodComponentArea}>
        <Form
          initialValues={{
            shareMessage: '',
            deliveryInfo: '',
            pickUpTime: '',
            listForDays: '',
            pickUpLocation: {},
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          <FormLocation name="pickUpLocation" title="PickUp Location" />

          <FormField
            title="Delivery Information"
            maxLength={100}
            name="deliveryInfo"
            placeholder="Enter delivery Info"
          />
          <FormField
            title="Pickup Time"
            maxLength={100}
            name="pickUpTime"
            placeholder="10AM to 8PM etc."
          />

          <StepperButtonInputField title="List For(days):" name="listForDays" />
          <FormField
            title="Share Message (optional)"
            maxLength={100}
            name="shareMessage"
            placeholder="enter any message for the availer"
          />

          <View style={styles.buttonAreaStyle}>
            <SubmitForm title="Share Food"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
