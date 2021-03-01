import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  emailLoginComponentArea: {
    width: '100%',
    height: mvs(300, 0.7),
    marginTop: mvs(40, 0.6),
  },
  loginOrSignupTitleText: {
    marginTop: mvs(50, 0.6),
    marginHorizontal: ms(25, 0.6),
  },

  emailInputArea: {
    marginTop: mvs(20, 0.6),
    marginHorizontal: ms(20, 0.6),
  },

  continueButton: {
    marginVertical: mvs(50, 0.6),
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    position: 'absolute',
    height: mvs(140, 0.6),
    width: '100%',
    marginTop: mvs(30, 0.6),
    borderRadius: ms(10, 0.6),
  },

  shareRideButtonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: mvs(10, 0.6),
  },
});
