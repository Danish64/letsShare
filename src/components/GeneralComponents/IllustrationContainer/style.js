import {StyleSheet} from 'react-native';
import {mvs} from 'react-native-size-matters';
import {Colors} from 'res/constants/Colors';

export default StyleSheet.create({
  illustrationContainer: {
    width: '100%',
    height: mvs(200, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: mvs(30, 0.5),
  },
  imageStyle: {
    width: '100%',
    height: mvs(300, 0.6),
  },
});
