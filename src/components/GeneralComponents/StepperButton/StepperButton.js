import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {StepperButton} from '../../../res/UniversalComponents/Button.js';
import {ButtonTextBlack} from '../../../res/UniversalComponents/Text.js';
import styles from './style';

// Supporting Imports
import { useFormikContext } from "formik";
// import { TextInput } from 'react-native-gesture-handler';

const Component = (props) => {
    const { setFieldTouched, touched, handleChange, errors } = useFormikContext(); 
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if(count === 0){
            
        }
        else{
            setCount(count - 1);
        }
    };
    // handleChange(count)
    return(
        <View style={styles.container}>
            <StepperButton iconName="remove-outline" onPress={decrement}/>
            {/* <TextInput placeholder={count.toString()} name={props.name} onChangeText={handleChange(props.name)}></TextInput> */}
            <ButtonTextBlack>{count} </ButtonTextBlack>
            <StepperButton iconName="add-outline" onPress={increment}/>            
        </View>
    );
}
export default Component;

