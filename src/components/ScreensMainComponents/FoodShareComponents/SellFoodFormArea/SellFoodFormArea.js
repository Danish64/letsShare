import React , {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Text
} from 'react-native';
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
  FormLocation
} from '../../../../res/UniversalComponents/Forms';
import SetLocation from '../../../GeneralComponents/SetLocation';
import {SellFood} from '../../../../res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation, Data}) => {
  const submitForm = (values) => {
    let valID = Math.floor(Math.random() * 100) + 1;
    const newData = {
      id: valID,
      title: Data.title,
      quantity: Data.quantity,
      description: Data.description,
      image: Data.image,
      pickupLocation: values.location,
      deliveryInfo: values.deliveryInfo,
      price: values.price,
      listFor: values.listFor,
    };
    console.log(newData);
    updateRides(newData);
  };

  const updateRides = (newData) => {
    SellFood.push(newData);
    // console.log(SellFood);
    navigation.navigate('FoodShareHome', newData);
    console.warn('Shared Successfuly');
  };

  return (
    <KeyboardAvoidingView>
    <View style={styles.donateFoodComponentArea}>
    <Form
      initialValues={{
        deliveryInfo: '',
        price: '',
        listFor: '',
        location: {},
      }}
      onSubmit={(values)=>{
        // console.log(values);
        // console.log(Data);
        submitForm(values);
      }}
      >

        {/* Input Delivery Info */}
        <FormField
          title="Delivery info"
          maxLength={500}
          name="deliveryInfo"
          placeholder="e.g collection only, shipping available etc."
        />

        {/* Input Price */}
        <FormField
          title="Price"
          maxLength={100}
          name="price"
          placeholder="e.g 500 Rs."
          keyboardType='numeric'
        />


       {/* Input Location */}
        <FormLocation name="location" title="Add Location"/>


        {/* Input List For: */}
        <StepperButtonInputField
          title="List For(days):"
          name="listFor"
        />


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
