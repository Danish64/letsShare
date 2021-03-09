import React from 'react';
import {View, Image} from 'react-native';
import {
  SubtitleTextCapitalizedBold,
  BodyText,
} from 'res/UniversalComponents/Text.js';
import {TextButton} from 'res/UniversalComponents/Button.js';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
//For Redux
import {connect} from 'react-redux';

const Component = ({userInfo}) => {
  let user = userInfo.user;

  console.log('UserInfo in introHeader Component', userInfo.user);
  return (
    <View style={styles.introHeaderContainer}>
      <View style={styles.introHeaderImageContainer}>
        <Image
          style={styles.introHeaderImageStyle}
          source={require('res/images/DefaultImages/userDefaultProfilePic.png')}
        />
      </View>
      <View style={styles.introHeaderProfileInfoContainer}>
        <SubtitleTextCapitalizedBold>{user.name}</SubtitleTextCapitalizedBold>

        <TextButton
          onPress={() => {
            console.log('Add Profile Navigator');
          }}>
          See Profile
        </TextButton>
      </View>
    </View>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
