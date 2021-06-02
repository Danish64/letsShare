import React, {useState, useEffect} from 'react';
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
import {TextInputTitleText} from 'res/UniversalComponents/Text.js';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import {useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';

const Component = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;

  const [shareAbleUnit, setShareAbleUnit] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShareableUnit = (name) => {
    // console.log('Handle Shareable Unit', name);
    setShareAbleUnit(name);
  };

  const categories = [
    {label: 'Whole House', name: 'house', value: 1},
    {label: 'Rooms', name: 'room', value: 2},
    {
      label: 'Bed',
      name: 'bed',
      value: 3,
    },
  ];

  const submitForm = (values) => {
    let fare = {};
    if (shareAbleUnit === 'house') {
      fare = {
        houseFare: values.fare,
        isAvailingWhole: true,
        singleShareAbleUnit: values.singleShareAbleUnit.name,
      };
    } else if (shareAbleUnit === 'room') {
      fare = {
        roomFare: values.fare,
        singleShareAbleUnit: values.singleShareAbleUnit.name,
      };
    } else {
      fare = {
        bedFare: values.fare,
        singleShareAbleUnit: values.singleShareAbleUnit.name,
      };
    }

    const spaceDetail = {
      ...fare,
      sharerId: item.ownerId,
      spaceTitle: item.spaceTitle,
      ownerContactNumber: item.ownerContactNumber,
      spaceLocation: item.spaceLocation,
      spaceType: item.spaceType,
      spacePictures: item.spacePictures,
      spaceSpecifications: item.spaceSpecifications,
      amenity: item.amenity,
      spaceDescription: item.spaceDescription,
      bookings: [],
    };
    console.log('SpaceDetails', spaceDetail);
    createResidenceShare(spaceDetail);
  };

  const createResidenceShare = async (newSpaceData) => {
    setIsLoading(true);
    let data = newSpaceData;
    const result = await doPost(
      'v1/residenceSpaceShares/createResidenceSpaceShare',
      data,
    );
    console.log(result);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('SpaceShareHome');
    }, 2000);
  };

  return (
    <Container>
      <Header title="Residence Space" navigation={navigation} hasBackIcon />
      <ScrollViewContainer>
        <KeyboardAvoidingView>
          <View style={styles.ComponentArea}>
            <Form
              initialValues={{}}
              onSubmit={(values) => {
                submitForm(values);
              }}>
              <FormPicker
                heading="Choose Single Shareable Uni"
                name="singleShareAbleUnit"
                icon="keypad-outline"
                items={categories}
                placeholder="Choose Shareable Unit"
                setState={handleShareableUnit}
              />
              <View style={{marginBottom: 30}} />

              <FormField
                title="Fare"
                maxLength={9}
                keyboardType="numeric"
                name="fare"
                placeholder={`Enter ${shareAbleUnit} fare in Rs.`}
              />

              {/* Submit Button */}
              <View style={styles.buttonAreaStyle}>
                <SubmitForm
                  title="Share Space"
                  loading={isLoading}></SubmitForm>
              </View>
            </Form>
          </View>
        </KeyboardAvoidingView>
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
