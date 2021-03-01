import React , {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput
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
  FormImagePicker
} from '../../../../res/UniversalComponents/Forms';
import {GoodsList} from '../../../../res/constants/dummyData';
//Third Party Exports Ends

const Component = ({navigation}) => {
  const submitForm = (values) => {
    values.id = Math.floor(Math.random() * 100) + 1;
    values.selected = false;
    const newData = values;
    updateRides(newData);
  };

  const updateRides = (newData) => {
    const arrayData = GoodsList;
    GoodsList.unshift(newData);
    navigation.navigate('CreateGoodsScreen', newData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createGoodsComponentArea}>
        <Form
        initialValues={{
          title: '',
          description: '',
          quantity: '',
          selected: null,
          image: [],
          id: '',
        }}
        onSubmit={(values)=>{
          submitForm(values);
          console.log(values);
        }}
        >
          {/* Input image */}
          <FormImagePicker name="image"/>

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

          {/* Stepper Button Input -> Quantity */}
          <StepperButtonInputField
            title="Quantity"
            name="quantity"
          />

          {/* Submit Form */}
          <View style={styles.buttonAreastyle}>
            <SubmitForm title="Add"></SubmitForm>
          </View>

        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
