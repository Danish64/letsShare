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
  // console.log('Working Space Item', item);

  // const [shareAbleUnit, setShareAbleUnit] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const handleShareableUnit = (name) => {
  //   // console.log('Handle Shareable Unit', name);
  //   setShareAbleUnit(name);
  // };

  // const categories = [
  //   {label: 'Seat', name: 'seat', value: 1},
  //   {label: 'Desk', name: 'desk', value: 2},
  //   {
  //     label: 'Office',
  //     name: 'office',
  //     value: 3,
  //   },
  // ];

  const submitForm = (values) => {
    // let fare = {};
    // if (shareAbleUnit === 'seat') {
    //   fare = {
    //     seatsAvailable: values.quantity,
    //     seatFare: values.fare,
    //   };
    // } else if (shareAbleUnit === 'desk') {
    //   fare = {
    //     desksAvailable: values.quantity,
    //     deskFare: values.fare,
    //   };
    // } else {
    //   fare = {
    //     roomsAvailable: values.quantity,
    //     roomFare: values.fare,
    //   };
    // }

    const spaceDetail = {
      sharerId: item.ownerId,
      spaceTitle: item.spaceTitle,
      spaceLocation: item.spaceLocation,
      ownerContactNumber: item.ownerContactNumber,
      spacePictures: item.spacePictures,
      spaceSpecifications: item.spaceSpecifications,
      spaceDescription: item.spaceDescription,
      seatsAvailable: values.seatsAvailable,
      seatFare: values.seatFare,
      desksAvailable: values.desksAvailable,
      deskFare: values.deskFare,
      roomsAvailable: values.roomsAvailable,
      roomFare: values.roomFare,
      bookings: [],
    };
    console.log('SpaceDetails', spaceDetail);
    createWorkingSpace(spaceDetail);
  };

  const createWorkingSpace = async (newSpaceData) => {
    setIsLoading(true);
    let data = newSpaceData;
    const result = await doPost(
      'v1/workingSpaceShares/createWorkingSpaceShare',
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
      <Header title="Working Space" navigation={navigation} hasBackIcon />
      <ScrollViewContainer>
        <KeyboardAvoidingView>
          <View style={styles.ComponentArea}>
            <Form
              initialValues={{
                seatsAvailable: '',
                seatFare: '-/',
                desksAvailable: '',
                deskFare: '-/',
                roomsAvailable: '',
                roomFare: '-/',
              }}
              onSubmit={(values) => {
                // console.log(values);
                submitForm(values);
              }}>
              {/* <FormPicker
                heading="Choose Single Shareable Uni"
                name="singleShareAbleUnit"
                icon="keypad-outline"
                items={categories}
                placeholder="Choose Shareable Unit"
                setState={handleShareableUnit}
              /> */}
              <View style={{marginBottom: 30}} />

              <StepperButtonInputField
                title={'Enter Seats Available'}
                name="seatsAvailable"
              />

              <FormField
                title="Single Seat Fare"
                maxLength={9}
                keyboardType="numeric"
                name="seatFare"
                placeholder={'Enter single seat fare in Rs'}
              />

              <StepperButtonInputField
                title={'Enter Desks Available'}
                name="desksAvailable"
              />

              <FormField
                title="Single Desk Fare"
                maxLength={9}
                keyboardType="numeric"
                name="deskFare"
                placeholder={'Enter single desk fare in Rs'}
              />

              <StepperButtonInputField
                title={'Enter Rooms Available'}
                name="roomsAvailable"
              />

              <FormField
                title="Single Room Fare"
                maxLength={9}
                keyboardType="numeric"
                name="roomFare"
                placeholder={'Enter single room fare in Rs'}
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
