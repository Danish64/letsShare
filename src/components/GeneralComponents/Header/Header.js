import React from 'react';
import {View, Image} from 'react-native';
import {LogoText} from 'res/UniversalComponents/Text.js';
import SearchRoundIcon from '../../Icons/SearchRoundIcon';
import BackRoundIcon from '../../Icons/RoundBackIcon';
import HeaderLogo from 'res/images/Logos/LogoPrimary.png';
import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({
  title,
  isSearchAble,
  hasBackIcon,
  navigation,
  navigateTo,
}) => {
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.headerArea}>
      {hasBackIcon ? (
        <BackRoundIcon
          onPress={() => {
            navigation.goBack();
          }}
          navigation={navigation}
        />
      ) : null}
      <View style={hasBackIcon ? null : styles.logoArea}>
        <LogoText>{title}</LogoText>
      </View>

      {isSearchAble ? (
        <View style={styles.searchBarArea}>
          <SearchRoundIcon navigation={navigation} navigateTo={navigateTo} />
        </View>
      ) : null}
    </View>
  );
};

export default Component;
