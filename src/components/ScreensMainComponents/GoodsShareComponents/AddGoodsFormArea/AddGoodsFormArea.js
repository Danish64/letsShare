import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from '../../../../res/UniversalComponents/Forms';
import {GoodsList} from '../../../../res/constants/dummyData';
import {useSelector} from 'react-redux';
import {doPost} from '../../../../utils/AxiosMethods';

// Text Fields Validations //
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(20).label('Title'),
  description: Yup.string().required().min(4).max(100).label('Description'),
  contactNo: Yup.string().required().min(11).max(13).label('Contact No'),
});

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  const submitForm = (values) => {
    const newGoodsData = {
      ownerId: user._id,
      title: values.title,
      description: values.description,
      quantity: values.quantity,
      ownerContactNumber: values.contactNo,
      images: values.image,
    };
    createRide(newGoodsData);
  };

  const createRide = async (newGoodsData) => {
    const result = await doPost('v1/userGoods/createGood', newGoodsData);
    console.log('Data from Goods Api', result);
    navigation.navigate('CreateGoodsScreen', newGoodsData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createGoodsComponentArea}>
        <Form
          initialValues={{
            title: '',
            description: '',
            quantity: '',
            contactNo: '',
            selected: null,
            image: [],
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          {/* Input image */}
          <FormImagePicker name="image" />

          {/* Input title */}
          <FormField
            title="Title"
            maxLength={50}
            name="title"
            placeholder="e.g. Shampoo Bottle"
          />

          {/* Input Description */}
          <FormField
            title="Description"
            maxLength={200}
            name="description"
            placeholder="e.g. 3 bottles of shampoo, 1 half filled..."
          />

          {/* Input Ride Owner Contact No */}
          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="contactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />

          {/* Stepper Button Input -> Quantity */}
          <StepperButtonInputField title="Quantity" name="quantity" />

          {/* Submit Form */}
          <View style={styles.submitButtonArea}>
            <SubmitForm title="Add"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
