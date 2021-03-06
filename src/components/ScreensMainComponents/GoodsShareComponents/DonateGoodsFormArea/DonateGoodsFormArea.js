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
import {Goods} from '../../../../res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation, Data}) => {

  const submitForm = (values) => {
    valID = Math.floor(Math.random() * 100) + 1;
    const newData = {
      id: valID,
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
    Goods.push(newData);
    console.log(Goods);
    navigation.navigate('GoodsShareHome', newData);
    console.warn('Shared Successfuly');
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.donateGoodsComponentArea}>
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
         
          <FormLocation name="location"/>

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
