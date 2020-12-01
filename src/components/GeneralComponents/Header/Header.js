import React from 'react';
import {View, Image} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  LogoText,
} from 'res/UniversalComponents/Text.js';
import SearchRoundIcon from '../../Icons/SearchRoundIcon';
import HeaderLogo from 'res/images/Logos/LogoPrimary.png';
import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, navigateTo}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.headerArea}>
      <View style={styles.logoArea}>
        <LogoText>Let's Share</LogoText>
      </View>
      <SearchRoundIcon navigation={navigation} navigateTo={navigateTo} />
    </View>
  );
};

export default Component;
