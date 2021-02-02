import React from 'react';
import styles from 'res/styles/index.styles.js';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TextInput, compose} from 'react-native';
import {Formik} from 'formik';
import {useFormikContext} from 'formik';
import Picker from '../../components/GeneralComponents/Picker';
import PickerItem from '../../components/GeneralComponents/Picker/PickerItem';

import {
  SectionHeadingText,
  TextInputTitleText,
  TextInputErrorMessage,
} from 'res/UniversalComponents/Text.js';
import {
  LandscapeButtonBlack,
  LandscapeButtonPrimary,
} from 'res/UniversalComponents/Button.js';

import {
  IconTextInputSquare,
  FormInputTitleBaseline,
} from 'res/UniversalComponents/TextInput.js';
import {Button} from 'react-native';

export const FormByFormik = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {(values) => <>{children}</>}
    </Formik>
  );
};

export const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) return null;
  return (
    <TextInputErrorMessage style={{color: Colors.Failure}}>
      {error}
    </TextInputErrorMessage>
  );
};
export const FormField = ({name, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <IconTextInputSquare
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export const BaselineFormField = ({name, ...otherProps}) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <View style={styles.baselineFormField}>
        <FormInputTitleBaseline
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
          value={values.name}
          {...otherProps}
        />
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      </View>
    </>
  );
};

export const FormPicker = ({heading, items, name, placeholder, icon}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <Picker
        heading={heading}
        icon={icon}
        item={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export const SubmitButton = ({title}) => {
  const {
    handleSubmit,
    resetForm,
    initialValues,
    setSubmitting,
    handleReset,
  } = useFormikContext();

  return (
    <LandscapeButtonBlack onPress={handleSubmit}>{title}</LandscapeButtonBlack>
  );
};
