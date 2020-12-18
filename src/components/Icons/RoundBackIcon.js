import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'res/constants/Colors';
import styles from 'res/styles/index.styles.js';
import {s, vs, ms} from 'react-native-size-matters';

export default SearchRoundIcon = ({navigation, navigateTo}) => {
  const onPress = (navigation) => {
    // console.log(navigateTo);
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      onPress={() => onPress(navigation)}
      style={styles.roundSearchIcon}>
      <Ionicons
        name="arrow-back-outline"
        color={Colors.Primary}
        size={ms(30)}
      />
    </TouchableOpacity>
  );
};
