import {StyleSheet} from 'react-native';
import {mvs} from 'react-native-size-matters';
import {Colors} from 'res/constants/Colors';

export default StyleSheet.create({
  illustrationContainer: {
    width: '100%',
    height: mvs(180, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: mvs(180, 0.6),
  },
});
