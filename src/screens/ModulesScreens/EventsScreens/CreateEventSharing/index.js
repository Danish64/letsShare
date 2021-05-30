import React, {useState} from 'react';
import {View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import styles from './styles';
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
import {shareRidesData} from 'res/constants/dummyData';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import Header from '../../../../components/GeneralComponents/Header';
import Container from 'res/UniversalComponents/Container';

const Component = ({}) => {
  const route = useRoute();

  const {data} = route.params;

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const user = useSelector((state) => state.userInformation.user);

  const shareId = data._id;

  const onPressSendRequest = async (newData) => {
    setLoading(true);
    let shareData = newData;
    const result = await doPost(
      `v1/events/createEventSharings/${shareId}`,
      shareData,
    );
    // console.log('Booking Ride Api Call', result);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('EventDetails');
    }, 2000);
  };

  const submitForm = (values) => {
    const newData = {
      sharerName: user.name,
      sharerContact: user.phone,
      shareType: values.shareType,
      shareTitle: values.shareTitle,
      shareDescription: values.shareDescription,
      shareCapacityDescription: values.shareCapacityDescription,
    };

    onPressSendRequest(newData);
  };

  return (
    <Container>
      <KeyboardAvoidingView>
        <Header title="Event Sharings" hasBackIcon navigation={navigation} />

        <View style={styles.ComponentArea}>
          <Form
            initialValues={{
              shareType: '',
              shareTitle: '',
              shareDescription: '',
              shareCapacityDescription: '',
            }}
            onSubmit={(values) => {
              submitForm(values);
            }}>
            <FormField
              title="Share Title "
              maxLength={100}
              name="shareTitle"
              placeholder="Enter share title e.g Ride for feeders sleepers"
              // keyboardType="numeric"
            />

            <FormField
              title="Share Type "
              maxLength={100}
              name="shareType"
              placeholder="Enter share type e.g ride, food, good or space"
              // keyboardType="numeric"
            />

            <FormField
              title="Share Description "
              maxLength={100}
              name="shareDescription"
              placeholder="Enter share description"
              // keyboardType="numeric"
            />

            <FormField
              title="Capacity Description "
              maxLength={100}
              name="shareCapacityDescription"
              placeholder="Enter restraints for your share e.g no smoking in car"
              // keyboardType="numeric"
            />

            {/* Submit Button */}
            <View style={styles.buttonAreaStyle}>
              <SubmitForm
                title="Share asset for event"
                loading={loading}></SubmitForm>
            </View>
          </Form>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default Component;
