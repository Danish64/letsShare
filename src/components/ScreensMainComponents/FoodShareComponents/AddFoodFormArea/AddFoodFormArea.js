import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, TextInput} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';
import {FoodList} from 'res/constants/dummyData';

import {useSelector} from 'react-redux';
import {doPost} from '../../../../utils/AxiosMethods';
//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(20).label('Title'),
  description: Yup.string().required().min(4).max(100).label('Description'),
  contactNo: Yup.string().required().min(11).max(13).label('Contact No'),
});

const Component = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  const submitForm = (values) => {
    const foodItemData = {
      ownerId: user._id,
      title: values.title,
      description: values.description,
      quantity: values.quantity,
      images: values.image,
      ownerContactNumber: values.contactNo,
    };
    createFood(foodItemData);
  };

  const createFood = async (foodItemData) => {
    setIsLoading(true);
    const result = await doPost('v1/userFoods/createFood', foodItemData);
    setIsLoading(false);
    navigation.navigate('CreateFoodScreen', foodItemData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createFoodComponentArea}>
        <Form
          initialValues={{
            title: '',
            description: '',
            quantity: '',
            image: [],
            contactNo: '',
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
            placeholder="e.g. Cheese Sandwich"
          />

          {/* Input Description */}
          <FormField
            title="Description"
            maxLength={200}
            name="description"
            placeholder="e.g. 3 pieces of sandwich etc..."
          />

          {/* Stepper Button Input -> Quantity */}
          <StepperButtonInputField title="Quantity" name="quantity" />

          {/* Input Sharer Contact No */}
          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="contactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />

          {/* Submit Form */}
          <View style={styles.submitButtonArea}>
            <SubmitForm title="Add Food/Stall" loading={isLoading}></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
