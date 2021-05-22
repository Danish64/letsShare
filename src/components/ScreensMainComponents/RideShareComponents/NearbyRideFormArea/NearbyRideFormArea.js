import React, {useRef} from 'react';
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
} from 'res/UniversalComponents/Forms';

import {useNavigation, useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

// const validationSchema = Yup.object().shape({
//   startAddress: Yup.string().required().label('Start Address'),
//   destinationAddress: Yup.string().required().label('Destination Address'),
// });

const Component = ({Data}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;

  const submitForm = (values) => {
    const rideDetail = {
      sharerId: item.ownerId,
      rideName: item.rideName,
      registrationNumber: item.registrationNumber,
      ownerContactNumber: item.ownerContactNumber,
      rideType: item.rideType,
      ridePictures: item.ridePictures,

      startLocation: {
        address: values.startLocation.data.description,
        latitude: values.startLocation.details.geometry.location.lat,
        longitude: values.startLocation.details.geometry.location.lat,
      },
      destinationLocation: {
        address: values.destinationLocation.data.description,
        latitude: values.destinationLocation.details.geometry.location.lat,
        longitude: values.destinationLocation.details.geometry.location.lat,
      },
      startAddress: values.startLocation.data.description,
      destinationAddress: values.destinationLocation.data.description,
    };
    navigation.navigate('NearbyRideFareDetailScreen', {rideDetail: rideDetail});
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.ComponentArea}>
        <Form
          initialValues={{
            startAddress: '',
            destinationAddress: '',
            startLocation: {},
            destinationLocation: {},
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          // validationSchema={validationSchema}
        >
          {/* <FormField
            title="Start Address"
            maxLength={100}
            name="startAddress"
            placeholder="enter complete address"
          /> */}
          {/* Start Location */}
          <FormLocation name="startLocation" title="Set Start Location" />
          {/* <FormField
            title="Destination Address"
            maxLength={100}
            name="destinationAddress"
            placeholder="enter complete address"
          /> */}
          {/* destination Location */}
          <FormLocation
            name="destinationLocation"
            title="Set Destination Location"
          />

          {/* Submit Button */}
          <View style={styles.buttonAreaStyle}>
            <SubmitForm title="Next"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Component;
