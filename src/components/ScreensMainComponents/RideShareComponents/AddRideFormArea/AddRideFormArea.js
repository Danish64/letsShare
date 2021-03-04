import React, {useState} from 'react';
import {View, KeyboardAvoidingView, TextInput, Image} from 'react-native';
import * as Yup from 'yup';

//Native Exports Ends Here

//Third Party Exports Starts
import styles from './style';
import {
  FormByFormik as Form,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';
import {TextInputTitleText} from 'res/UniversalComponents/Text.js';
import {addRideDummyData} from 'res/constants/dummyData';
import FillForm from 'res/images/ModulesImages/GeneralImages/fillForm.png';

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  rideName: Yup.string().required().min(3).max(15).label('Ride Name'),
  registrationNo: Yup.string()
    .required()
    .min(4)
    .max(10)
    .label('Registration No'),
  contactNo: Yup.string().required().min(11).label('Contact No'),
  //category: Yup.object().required().nullable().label('Category'),
});

// const categories = [
//   {label: 'Car', value: 1},
//   {label: 'Bike', value: 2},
// ];

const Component = ({navigation}) => {
  const submitForm = (values) => {
    values.id = Math.floor(Math.random() * 100) + 1;
    values.selected = false;
    const newData = values;
    updateRides(newData);
  };

  const updateRides = (newData) => {
    addRideDummyData.unshift(newData);
    navigation.navigate('CreateRideScreen', newData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createRideComponentArea}>
        <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={FillForm}
            style={styles.imageContainer}
          />
        </View>
        <Form
          initialValues={{
            rideName: '',
            registrationNo: '',
            contactNo: '',
            //category: null,
            selected: null,
            image: [],
            id: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
            console.log(values);
          }}
          validationSchema={validationSchema}>
          {/* Input Ride Name */}
          <FormField
            title="Ride Name"
            maxLength={20}
            name="rideName"
            placeholder="Enter your ride name. e.g; Honda City"
          />

          {/* Input Ride Registartion No */}
          <FormField
            title="Registration No"
            maxLength={10}
            name="registrationNo"
            placeholder="Enter Ride Registration No. e.g; LES-1020"
          />

          {/* Input Ride Owner Contact No */}
          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="contactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />
          {/* <FormPicker
            heading="Choose Category"
            name="category"
            icon="keypad-outline"
            items={categories}
            placeholder="Category"
          /> */}
          <View style={styles.uploadImageArea}>
            <TextInputTitleText>Upload Ride Image</TextInputTitleText>
            {/* Input image */}
            <FormImagePicker name="image" />
          </View>

          {/* Submit Form */}
          <View style={styles.submitButtonArea}>
            <SubmitForm title="Add Ride"></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;

// import React, {useState} from 'react';
// import * as Yup from 'yup';

// import styles from './style';
// import {
//   View,
//   Image,
//   TouchableOpacity,
//   Text,
//   KeyboardAvoidingView,
// } from 'react-native';

// import {
//   FormByFormik as Form,
//   //FormField,
//   BaselineFormField as FormField,
//   FormPicker,
//   SubmitButton as SubmitForm,
// } from 'res/UniversalComponents/Forms.js';

// import AddRide from 'res/images/ModulesImages/RideSharingImages/AddRide.png';
// import CheckBoxes from 'res/images/ModulesImages/GeneralImages/checkBoxes.png';
// import {addRideDummyData} from 'res/constants/dummyData.js';

// //Native Exports Ends Here
// //Third Party Exports Starts

// //Third Party Exports Ends

// const validationSchema = Yup.object().shape({
//   assetName: Yup.string().required().min(1).max(20).label('Ride Name'),
//   rideRegistrationNo: Yup.string()
//     .required()
//     .min(1)
//     .max(10)
//     .label('Registration No'),
//   contactNo: Yup.string().required().max(13).label('Contact No'),
//   category: Yup.object().required().nullable().label('Category'),
//   //id: Yup.number().label('Id'),
//   //selected: Yup.object().required().nullable().label('selected'),
// });

// const categories = [
//   {label: 'Go', value: 1},
//   {label: 'Go Plus', value: 2},
//   {label: 'Bike', value: 3},
// ];

// const Component = ({route, navigation}) => {
//   const submitForm = (values) => {
//     values.id = Math.floor(Math.random() * 100) + 1;
//     values.selected = false;
//     values.category = 'Go';
//     const newData = values;
//     console.log(newData);
//     updateRides(newData, navigation);
//   };

//   const updateRides = (newData, navigation) => {
//     const arrayData = addRideDummyData;
//     arrayData.push(newData);
//     //updateUserRides(arrayData);
//     console.log(arrayData);
//     navigation.navigate('CreateRideScreen');
//   };

//   return (
//     <KeyboardAvoidingView>
//       <View style={styles.createRideComponentArea}>
//         <View style={styles.pngImageArea}>
//           <Image
//             resizeMode="contain"
//             source={CheckBoxes}
//             style={styles.imageContainer}
//           />
//         </View>
//         <View style={styles.formArea}>
//           <Form
//             initialValues={{
//               assetName: '',
//               rideRegistrationNo: '',
//               contactNo: '',
//               selected: null,
//               id: '',
//               category: '',
//             }}
//             onSubmit={(values) => {
//               console.log(values);
//               // submitForm(values);
//             }}
//             validationSchema={validationSchema}>
//             <FormField
//               title="Ride Name"
//               maxLength={20}
//               name="assetName"
//               placeholder="Enter the name of your Ride"
//             />
//             <FormField
//               title="Registration No"
//               maxLength={20}
//               name="rideRegistrationNo"
//               placeholder="Enter the registration No of your Ride"
//             />

//             <FormField
//               title="Contact No"
//               keyboardType="numeric"
//               maxLength={13}
//               name="contactNo"
//               placeholder="Enter your contact No"
//             />
//             {/* <FormPicker
//               heading="Choose Ride Type"
//               icon="keypad-outline"
//               items={categories}
//               name="category"
//               placeholder="Category"
//             /> */}
//             <View style={styles.submitButtonArea}>
//               <SubmitForm title="Add Ride" />
//             </View>
//           </Form>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default Component;

// {
//   /* <View style={styles.pngImageAreaLarge}>
//           <Image
//             resizeMode="contain"
//             source={AddRide}
//             style={styles.imageContainer}
//           />
//         </View> */
// }
