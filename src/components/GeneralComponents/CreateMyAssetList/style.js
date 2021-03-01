import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: mvs(100, 0.6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
