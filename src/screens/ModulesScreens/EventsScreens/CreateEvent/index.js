import React, {useState, useEffect} from 'react';
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
import {TextInputTitleText} from 'res/UniversalComponents/Text.js';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import {useRoute} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserActivityClass from '../../../../utils/UserActivity';
const Component = ({userInfo, navigation}) => {
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(false);
  const user = userInfo.user;

  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      onScreen: 'Events Home',
      toScreen: 'Create Event',
      email: user.email,
    };
    UserActivity.mixpanel.track('Switching Screens - Create Event', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

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
    let oneDayEvent = false;

    if (values.eventDuration == 1) {
      oneDayEvent = true;
    }

    const eventDetail = {
      managerId: user._id,
      managerName: user.name,
      managerContact: user.phone,
      eventTitle: values.title,
      eventDescription: values.eventDescription,
      eventLocation: {
        address: values.eventLocation.data.description,
        latitude: values.eventLocation.details.geometry.location.lat,
        longitude: values.eventLocation.details.geometry.location.lng,
      },
      isOneDay: oneDayEvent,
      eventStartDate: values.eventStartDate,
      eventEndDate: values.eventEndDate,
      eventDuration: `${values.eventDuration.toString() + ' ' + 'day/s'}   `,
      eventPictures: values.image,
    };

    createEvent(eventDetail);
  };

  const createEvent = async (data) => {
    setIsLoading(true);
    const result = await doPost('v1/events/createEvent', data);
    console.log('Result in create event ', result);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('EventHomeScreen');
    }, 2000);
  };

  return (
    <Container>
      <Header title="Create Event" navigation={navigation} hasBackIcon />
      <ScrollViewContainer>
        <KeyboardAvoidingView>
          <View style={styles.ComponentArea}>
            <Form
              initialValues={{
                image: [],
              }}
              onSubmit={(values) => {
                submitForm(values);
              }}>
              <FormImagePicker name="image" />
              <View style={{marginBottom: 30}} />

              <FormField
                title="Title"
                maxLength={50}
                name="title"
                placeholder="Give your event a great title e.g Feed&Sleep"
              />
              <View style={{marginBottom: 30}} />

              <FormField
                title="Event Description"
                maxLength={200}
                name="eventDescription"
                placeholder="Picture your event in words here..."
              />
              <View style={{marginBottom: 30}} />

              <FormLocation name="eventLocation" title="Set Event Venue" />
              <View style={{marginBottom: 30}} />

              <StepperButtonInputField
                title="Event Duration(Days)"
                name="eventDuration"
              />
              <View style={{marginBottom: 30}} />

              <FormField
                title="Event Start Date"
                maxLength={200}
                name="eventStartDate"
                placeholder="25th June, 2021"
              />

              <View style={{marginBottom: 30}} />

              <FormField
                title="Event End Date"
                maxLength={200}
                name="eventEndDate"
                placeholder="29th June, 2021"
              />
              <View style={{marginBottom: 30}} />

              {/* Submit Button */}
              <View style={styles.buttonAreaStyle}>
                <SubmitForm
                  title="Create Event"
                  loading={isLoading}></SubmitForm>
              </View>
            </Form>
          </View>
        </KeyboardAvoidingView>
      </ScrollViewContainer>
    </Container>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
