import React from 'react';
import {ShareActionAreaHeadingText} from 'res/UniversalComponents/Text.js';
import {PrimaryIconButton} from 'res/UniversalComponents/Button.js';
import {FormTextInput} from 'res/UniversalComponents/TextInput.js';

import styles from './style';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import AddRide from 'res/images/ModulesImages/RideSharingImages/AddRide.png';
import CheckBoxes from 'res/images/ModulesImages/GeneralImages/checkBoxes.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <KeyboardAvoidingView>
      <View style={styles.createRideComponentArea}>
        <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={CheckBoxes}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.formArea}>
          <FormTextInput title="Ride Name" placeHolder="Enter your ride name" />
          <FormTextInput
            title="Ride Number"
            placeHolder="Enter your ride registration number"
          />

          <FormTextInput
            title="Phone Number"
            placeHolder="Enter ride owner phone number"
          />
        </View>
        <View style={styles.buttonAreastyle}>
          <PrimaryIconButton
            onPress={() => navigation.navigate('LoadingScreen')}>
            Add Ride
          </PrimaryIconButton>
        </View>
        <View style={styles.pngImageAreaLarge}>
          <Image
            resizeMode="contain"
            source={AddRide}
            style={styles.imageContainer}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
