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
  startTime: Yup.string().required().min(3).max(20).label('Start Time'),
  endTime: Yup.string().required().min(3).max(20).label('End Time'),
  date: Yup.string().required().min(3).max(20).label('date'),
  listForDays: Yup.string().required().min(1).max(3).label('Listing Days'),
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
      shareType: 'sell',
      deliveryInfo: values.deliveryInfo,
      listForDays: values.listForDays,
      pickUpLocation: {
        address: values.pickUpLocation.data.description,
        latitude: values.pickUpLocation.details.geometry.location.lat,
        longitude: values.pickUpLocation.details.geometry.location.lat,
      },
      pickUpTime: values.pickUpTime,
    };
    createFoodShare(newData);
  };

  const createFoodShare = async (sellFoodShare) => {
    let data = sellFoodShare;
    const result = await doPost('v1/foodShares/createFoodShare', data);
    navigation.navigate('CreateFoodScreen', sellFoodShare);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.sellFoodComponentArea}>
        <Form
          initialValues={{
            startTime: '',
            endTime: '',
            stallLocation: {},
            date: '',
            listForDays: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          <FormLocation name="stallLocation" title="stall Location" />

          <FormField
            title="Start Time"
            maxLength={10}
            name="startTime"
            placeholder="e.g. 10:30 AM "
          />

          <FormField
            title="End Time"
            maxLength={10}
            name="endTime"
            placeholder="e.g. 6:30 PM "
          />

          <FormField
            title="Stall Scheduled Date"
            maxLength={10}
            name="date"
            placeholder="e.g. 06/06/2021 "
          />
          <StepperButtonInputField title="List For(days):" name="listForDays" />

          <View style={styles.buttonAreaStyle}>
            <SubmitForm title="Create Stall"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
