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
import {Food} from '../../../../res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation, Data}) => {

  const submitForm = (values) => {
    // valID = ;
    const newData = {
      id: Math.floor(Math.random() * 100) + 1,
      title: Data.title,
      quantity: Data.quantity,
      description: Data.description,
      image: Data.image,
      pickupLocation: values.location,
      pickupTime: values.pickupTime,
      listFor: values.listFor,
    };
    console.log(newData);
    updateRides(newData);
  };

  const updateRides = (newData) => {
    Food.push(newData);
    console.log(Food);
    navigation.navigate('FoodShareHome', newData);
    console.warn('Shared Successfuly');
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.donateFoodComponentArea}>
      <Form
        initialValues={{
          pickupTime: '',
          listFor: '',
          location: {},
        }}
        onSubmit={(values)=>{
          // console.log(values);
          // console.log(Data);
          submitForm(values);
        }}
        >
          <FormField
            title="Pickup Time"
            maxLength={100}
            name="pickupTime"
            placeholder="10AM to 8PM etc."
          />
         
          <FormLocation name="location" title="Add Location"/>

          <StepperButtonInputField
            title="List For(days):"
            name="listFor"
          />
          
          {/* <Text>{JSON.stringify(Data)}</Text> */}
          <View style={styles.buttonAreastyle}>
            <SubmitForm title="Share"></SubmitForm>
          </View>
         


        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
