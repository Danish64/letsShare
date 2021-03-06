import React from 'react';
import {View,
    KeyboardAvoidingView,
    TextInput,
    Text} from 'react-native';
import styles from './style';
import {
    FormByFormik as Form,
    StepperButtonInputField,
    BaselineFormField as FormField,
    FormPicker,
    SubmitButton as SubmitForm,
    FormImagePicker,
    FormLocation
  } from '../../../../res/UniversalComponents/Forms';
import {CityToCityRides, TourRides} from '../../../../res/constants/dummyData';

const Component = ({navigation, Data}) => {
    const submitForm = (values) => {
        let valID = Math.floor(Math.random() * 100) + 1;
        const newData = {
            id: valID,
            rideName: Data.rideName,
            registrationNo: Data.registrationNo,
            contactNumber: Data.contactNumber,
            rideType: 'City to City Ride',
            image: Data.image,
            fare: values.fare,
            departureDate: values.departureDate,
            departureTime: values.departureTime,
            startLocation: values.startLocation,
            destinationLocation: values.destinationLocation,
            listFor: values.listFor,
            seatsAvailable: values.seatsAvailable,
        };
        // console.log(newData);
        updateRides(newData);
      };
    
      const updateRides = (newData) => {
        TourRides.push(newData);
        // console.log(NearbyRides);
        navigation.navigate('RideShareHome', newData);
        console.warn('Shared Successfuly');
      };

    return(
        <KeyboardAvoidingView>
            <View style={styles.ComponentArea}>
            <Form
            initialValues={{
                fare: '',
                listFor: '',
                departureDate: '',
                departureTime: '',
                startLocation: {},
                destinationLocation: {},
                seatsAvailable: ''
            }}
            onSubmit={(values)=>{
                // console.log(values);
                // console.log(Data);
                submitForm(values);
            }}
            >

                {/* Input Fare */}
                <FormField
                title="Fare"
                maxLength={100}
                name="fare"
                placeholder="e.g 500 Rs."
                keyboardType='numeric'
                />

                {/* Departure Date */}
                <FormField
                title="Departure Date"
                maxLength={100}
                name="departureDate"
                placeholder="e.g 30th March, 2021"
                />

                {/* Departure Time */}
                <FormField
                title="Departure Time"
                maxLength={100}
                name="departureTime"
                placeholder="e.g 5pm"
                />


                {/* Start Location */}
                <FormLocation name="startLocation"/>

                {/* destination Location */}
                <FormLocation name="destinationLocation"/>

                {/* Input List For: */}
                <StepperButtonInputField
                title="List For(days):"
                name="listFor"
                />

                {/* Seats Available: */}
                <StepperButtonInputField
                title="Seats Available:"
                name="seatsAvailable"
                />


                {/* Submit Button */}
                <View style={styles.buttonAreastyle}>
                <SubmitForm title="Share"></SubmitForm>
                </View>

            </Form>
            </View>
        </KeyboardAvoidingView>
    );
};
export default Component;