import React, {useState} from 'react';
import styles from 'res/styles/index.styles.js';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TextInput, compose} from 'react-native';
import {Formik} from 'formik';
import {useFormikContext} from 'formik';
import Picker from '../../components/GeneralComponents/Picker';
import ImagePicker from '../../components/GeneralComponents/ImagePicker';
import SetLocation from '../../components/GeneralComponents/SetLocation';
import PickerItem from '../../components/GeneralComponents/Picker/PickerItem';

import {
  TextInputTitleText,
  TextInputErrorMessage,
} from 'res/UniversalComponents/Text.js';
import {
  LandscapeButtonBlack,
  LandscapeButtonPrimary,
  StepperButton,
} from 'res/UniversalComponents/Button.js';

import {
  IconTextInputSquare,
  FormInputTitleBaseline,
} from 'res/UniversalComponents/TextInput.js';

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
export const FormField = ({name, showDate, ...otherProps}) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <IconTextInputSquare
        onChangeText={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
        }}
        onFocus={() => {
          showDate ? showDate(name) : null;
        }}
        value={values.name}
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

export const StepperButtonInputField = ({name, title, ...otherProps}) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <View style={styles.stepperInputAreaBlur}>
        <TextInputTitleText>{title}</TextInputTitleText>
        <View style={styles.stepperContainer}>
          <StepperButton iconName="remove-outline" onPress={decrement} />
          <TextInput
            placeHolder={count.toString()}
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            value={(values[name] = count.toString())}
            {...otherProps}></TextInput>
          <ErrorMessage visible={touched[name]} error={errors[name]} />
          <StepperButton iconName="add-outline" onPress={increment} />
        </View>
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
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        placeholder={placeholder}
        selectedItem={values[name]}
        value={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export const LocationInput = ({heading, name, placeholder}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <Picker
        heading={heading}
        onSelectItem={(item) => setFieldValue(name, item.target.file[0])}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export const FormImagePicker = ({name}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <ImagePicker onSelectItem={(image) => setFieldValue(name, image)} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export const FormLocation = ({name, title}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <SetLocation 
        onSelectItem={(data) => setFieldValue(name, data)} 
        title= {title}/>
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
    // <LandscapeButtonBlack onPress={handleSubmit}>{title}</LandscapeButtonBlack>
    <LandscapeButtonPrimary onPress={handleSubmit}>{title}</LandscapeButtonPrimary>
  );
};

// export const DatePickerField = ({...props}) => {
//   const {setFieldValue} = useFormikContext();
//   const [field] = useField(props);
//   return (
//     <DatePicker
//       {...field}
//       {...props}
//       selected={(field.value && new Date(field.value)) || null}
//       onChange={(val) => {
//         setFieldValue(field.name, val);
//       }}
//     />
//   );
// };

export const TestFormField = ({name, showDate, ...otherProps}) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <TestField
        onChangeText={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
        }}
        onFocus={() => {
          showDate ? showDate(name) : null;
        }}
        value={values.name}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};
