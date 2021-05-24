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
import {SellGoods} from '../../../../res/constants/dummyData';
import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

const validationSchema = Yup.object().shape({
  deliveryInfo: Yup.string().required().max(100).label('Delivery Info'),
  price: Yup.string().required().min(2).max(7).label('Price'),
  pickUpTime: Yup.string().required().min(3).max(20).label('Pickup Time'),
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
      images: item.images,
      shareMessage: values.shareMessage,
      shareType: 'sell',
      deliveryInfo: values.deliveryInfo,
      pickUpLocation: {
        address: values.location.data.description,
        latitude: values.location.details.geometry.location.lat,
        longitude: values.location.details.geometry.location.lng,
      },
      price: values.price,
      pickUpTime: values.pickUpTime,
      listForDays: values.listFor,
    };
    updateGoods(newData);
  };

  const updateGoods = async (newGoodsData) => {
    let data = newGoodsData;
    const result = await doPost('v1/goodShares/createGoodShare', data);
    navigation.navigate('GoodsShareHome', newGoodsData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.donateGoodsComponentArea}>
        <Form
          initialValues={{
            deliveryInfo: '',
            price: '',
            pickUpTime: '',
            listFor: '',
            location: {},
            shareMessage: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          <FormLocation name="location" title="Add Location" />
          {/* Input Price */}
          <FormField
            title="Price"
            maxLength={100}
            name="price"
            placeholder="e.g 500 Rs."
            keyboardType="numeric"
          />

          <FormField
            title="Pickup Time"
            maxLength={100}
            name="pickUpTime"
            placeholder="10AM to 8PM etc."
          />

          {/* Input Delivery Info */}
          <FormField
            title="Delivery info"
            maxLength={500}
            name="deliveryInfo"
            placeholder="e.g collection only, shipping available etc."
          />

          {/* Input List For: */}
          <StepperButtonInputField title="List For(days):" name="listFor" />
          <FormField
            title="Sharer Message(optional)"
            maxLength={200}
            name="shareMessage"
            placeholder="write your message for the availer"
          />

          {/* Submit Button */}
          <View style={styles.buttonAreaStyle}>
            <SubmitForm title="Share"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
