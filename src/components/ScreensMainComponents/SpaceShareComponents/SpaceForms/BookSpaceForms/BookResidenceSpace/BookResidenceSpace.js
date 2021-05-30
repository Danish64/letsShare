import React from 'react';
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import styles from './style';
import * as Yup from 'yup';

import {
  FormByFormik as Form,
  StepperButtonInputField,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
  FormLocation,
  SubmitButtonPrimary,
} from 'res/UniversalComponents/Forms';
import {shareRidesData} from 'res/constants/dummyData';

import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {doPost} from '../../../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer';

const Component = ({data}) => {
  const validationSchema = Yup.object().shape({
    availerMessage: Yup.string().required().min(5).label('Your Message'),
  });
  const navigation = useNavigation();
  const route = useRoute();
  const user = useSelector((state) => state.userInformation.user);
  console.log(data.singleShareAbleUnit);

  const shareId = data._id;
  const sharerId = data.sharerId;

  const onPressBookRide = async (newData) => {
    let data = newData;
    const result = await doPost(
      `v1/residenceSpaceShares/createResidenceSpaceShareBooking/${shareId}`,
      data,
    );
    console.log('Booking Ride Api Call', result);
    navigation.navigate('SpaceShareHome');
  };

  const submitForm = (values) => {
    const newData = {
      availerId: user._id,
      availerName: user.name,
      availerAddress: values.availerLocation.data.description,
      availerPhoneNumber: user.phone,
      availerMessage: values.availerMessage,
      isAvailingWhole: values.isAvailingWhole.label,
    };

    onPressBookRide(newData);
  };

  const categories = [
    {label: 'true', value: 1},
    {label: 'false', value: 2},
  ];

  return (
    <ScrollViewContainer>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            isAvailingWhole: {},
            availerMessage: '',
            availerLocation: {},
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          {/* Start Location */}
          <FormLocation name="availerLocation" title="Enter your Location" />

          <FormField
            title="Message for Sharer (Optional) "
            maxLength={100}
            name="availerMessage"
            placeholder="Enter your message for the sharer"
            // keyboardType="numeric"
          />

          {data.singleShareAbleUnit == 'house' && (
            <FormPicker
              heading="Choose "
              name="isAvailingWhole"
              icon="keypad-outline"
              items={categories}
              placeholder="Choose availing option"
            />
          )}

          {/* Submit Button */}
          <View style={styles.buttonAreaStyle}>
            <SubmitButtonPrimary title="Send Booking Request"></SubmitButtonPrimary>
          </View>
        </Form>
      </View>
    </ScrollViewContainer>
  );
};
export default Component;
