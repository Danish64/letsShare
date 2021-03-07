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
import {NearbyRides, Rides} from '../../../../res/constants/dummyData';

const Component = ({navigation, Data}) => {
    const submitForm = (values) => {
        let valID = Math.floor(Math.random() * 100) + 1;
        const newData = {
            id: valID,
            rideName: Data.rideName,
            registrationNo: Data.registrationNo,
            contactNumber: Data.contactNumber,
            rideType: 'Nearby Ride',
            image: Data.image,
            fare: values.fare,
            startLocation: values.startLocation,
            destinationLocation: values.destinationLocation,
            listFor: values.listFor,
        };
        console.log(newData);
        updateRides(newData);
      };
    
      const updateRides = (newData) => {
        Rides.push(newData);
        // console.log(NearbyRides);
        navigation.navigate('RideShareHome', newData);
        console.warn('Shared Successfuly');
      };

      console.log(JSON.stringify(Data));

    return(
        <KeyboardAvoidingView>
            <View style={styles.ComponentArea}>
            <Form
            initialValues={{
                fare: '',
                listFor: '',
                startLocation: {},
                destinationLocation: {},
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


            {/* Start Location */}
                <FormLocation name="startLocation" title="Start Location"/>

                {/* destination Location */}
                <FormLocation name="destinationLocation" title="Destination Location"/>

                {/* Input List For: */}
                <StepperButtonInputField
                title="List For(days):"
                name="listFor"
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