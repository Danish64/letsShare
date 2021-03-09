import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  BodyTextBlack,
  BodyTextLight,
  CaptionText,
} from 'res/UniversalComponents/Text.js';
import Header from '../../../components/GeneralComponents/Header';
import {ms, mvs} from 'react-native-size-matters';
import {connect} from 'react-redux';

const Component = ({userInfo, navigation}) => {
  return (
    <Container>
      <Header title="Messages" />
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: mvs(10, 0.8),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
          style={{
            width: '90%',
            flexDirection: 'row',
            height: mvs(80, 0.8),
            backgroundColor: '#fafafa',
            elevation: ms(2),
            marginVertical: mvs(10, 0.8),
          }}>
          <View
            style={{
              width: '30%',
              height: '100%',
              paddingHorizontal: ms(3, 0.8),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '70%', height: '70%', borderRadius: ms(65, 0.8)}}
              source={require('res/images/DefaultImages/userDefaultProfilePic.png')}
            />
          </View>

          <View
            style={{
              width: '70%',
              paddingHorizontal: ms(10, 0.8),
              paddingVertical: mvs(10, 0.8),
            }}>
            <BodyTextBlack>AltoVXR Availer</BodyTextBlack>
            <BodyTextLight>Hey there !</BodyTextLight>
            <CaptionText>At 3:15 am</CaptionText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
          style={{
            width: '90%',
            flexDirection: 'row',
            height: mvs(80, 0.8),
            backgroundColor: '#fafafa',
            elevation: ms(2),
            marginVertical: mvs(10, 0.8),
          }}>
          <View
            style={{
              width: '30%',
              height: '100%',
              paddingHorizontal: ms(3, 0.8),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '70%', height: '70%', borderRadius: ms(55, 0.8)}}
              source={require('res/images/DefaultImages/userDefaultProfilePic.png')}
            />
          </View>

          <View
            style={{
              width: '70%',
              paddingHorizontal: ms(10, 0.8),
              paddingVertical: mvs(10, 0.8),
            }}>
            <BodyTextBlack>CreekVista Apart Sharer</BodyTextBlack>
            <BodyTextLight>Is the apart free now ?</BodyTextLight>
            <CaptionText>At 6:00 pm</CaptionText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatScreen');
          }}
          style={{
            width: '90%',
            flexDirection: 'row',
            height: mvs(80, 0.8),
            backgroundColor: '#fafafa',
            elevation: ms(2),
            marginVertical: mvs(10, 0.8),
          }}>
          <View
            style={{
              width: '30%',
              height: '100%',
              paddingHorizontal: ms(3, 0.8),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '70%', height: '70%', borderRadius: ms(55, 0.8)}}
              source={require('res/images/DefaultImages/userDefaultProfilePic.png')}
            />
          </View>

          <View
            style={{
              width: '70%',
              paddingHorizontal: ms(10, 0.8),
              paddingVertical: mvs(10, 0.8),
            }}>
            <BodyTextBlack>Ragged Jeans Sharer</BodyTextBlack>
            <BodyTextLight>Can you come to pick now?</BodyTextLight>
            <CaptionText>At 3:44 pm</CaptionText>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
