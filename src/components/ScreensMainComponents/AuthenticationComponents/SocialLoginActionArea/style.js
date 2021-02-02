import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  socialLoginComponentArea: {
    width: '100%',
    height: mvs(150, 0.7),
  },

  googleLoginButton: {
    marginVertical: mvs(30, 0.6),
    marginHorizontal: ms(20, 0.6),
  },
});
