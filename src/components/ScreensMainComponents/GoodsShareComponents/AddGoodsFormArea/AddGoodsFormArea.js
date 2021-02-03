import React , {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
//Native Exports Ends Here

//Third Party Exports Starts
import {ShareActionAreaHeadingText} from 'res/UniversalComponents/Text.js';
import {PrimaryIconButton} from 'res/UniversalComponents/Button.js';
import {FormTextInput} from 'res/UniversalComponents/TextInput.js';
import {StepperButton} from '../../../../res/UniversalComponents/Button.js';
import {TextInputTitleText} from '../../../../res/UniversalComponents/Text.js';
import styles from './style';
import { Formik, Field } from 'formik';
import {GoodsList} from '../../../../res/constants/dummyData';
import SetLocation from '../../../GeneralComponents/SetLocation';
import { set } from 'react-native-reanimated';
//Third Party Exports Ends

const Component = ({navigation}) => {
  const [goods, setGoods] = useState(GoodsList);
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
    const addGoods = ({goods, navigation}) => {
      goods.key = Math.random().toString();
      // setGoods((currentGoods) => {
      //   return [goods, ...currentGoods];
      // });
      GoodsList.unshift(goods);
    };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createGoodsComponentArea}>
        <Formik
          initialValues={{
            title: '',
            description: '',
            quantity: ''
          }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            addGoods(values);
            navigation.navigate('CreateGoodsScreen');
            //console.log(GoodsList);
          }}
        >
          {(props) =>(
              <View style={styles.formArea}>
              <FormTextInput 
                title="Title" 
                placeHolder="e.g. Shampoo Bottle" 
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />
              <FormTextInput
                title="Description"
                placeHolder="e.g. 3 bottles of shampoo, 1 half filled..."
                onChangeText={props.handleChange('description')}
                value={props.values.description}
              />
              <View style={styles.textInputAreaBlur}>
                <TextInputTitleText>Quantity</TextInputTitleText> 
                <View style={styles.container}>              
                  <StepperButton iconName="remove-outline" onPress={decrement}/>
                  <TextInput 
                    placeHolder={count.toString()}
                    onChangeText={props.handleChange("quantity")}
                    value={(props.values.quantity = count.toString())}>
                  </TextInput>
                  <StepperButton iconName="add-outline" onPress={increment}/> 
                </View>
              </View>
              <View style={styles.buttonAreastyle}>
              <PrimaryIconButton onPress={props.handleSubmit}>Add </PrimaryIconButton>
              </View>
            </View>
          )}                                  
        
          </Formik>
          {/* <View>
          <SetLocation/>
        </View> */}
         
        </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
