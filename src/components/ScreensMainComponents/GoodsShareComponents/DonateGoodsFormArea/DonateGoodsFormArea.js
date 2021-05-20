import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  SubmitButton as SubmitForm,
  FormLocation,
} from '../../../../res/UniversalComponents/Forms';

import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

//Third Party Exports Ends
const validationSchema = Yup.object().shape({
  pickupTime: Yup.string().required().min(3).max(20).label('Pickup Time'),
  listFor: Yup.string().required().min(1).max(3).label('Listing Days'),
});

const Component = ({Data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;

  const submitForm = (values) => {
    const newData = {
      sharerId: item.ownerId,
      title: item.title,
      quantity: item.quantity,
      description: item.description,
      ownerContactNumber: item.ownerContactNumber,
      image: '',
      // shareMessage: values.shareMessage,
      shareType: 'donate',
      deliveryInfo: values.deliveryInfo,
      pickupLocation: {
        address: values.location.data.description,
        latitude: values.location.details.geometry.location.lat,
        longitude: values.location.details.geometry.lng,
      },
      pickupTime: values.pickupTime,
      listForDays: values.listFor,
    };
    updateGoods(newData);
  };

  const updateGoods = async (newGoodsData) => {
    let data = newGoodsData;
    const result = await doPost(
      'v1/goodShares/createGoodShare',
      data,
    );
    navigation.navigate('GoodsShareHome', newGoodsData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.donateGoodsComponentArea}>
        <Form
          initialValues={{
            pickupTime: '',
            listFor: '',
            deliveryInfo: '',
            location: {},
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>

          <FormField
            title="Pickup Time"
            maxLength={100}
            name="pickupTime"
            placeholder="10AM to 8PM etc."
          />

          <FormField
            title="Delivery Info"
            maxLength={200}
            name="deliveryInfo"
            placeholder="I can deliver it in the evening etc."
          />

          <FormLocation name="location" title="Add Location" />

          <StepperButtonInputField title="List For(days):" name="listFor" />

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
