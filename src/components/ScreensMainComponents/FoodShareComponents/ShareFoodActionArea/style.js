import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareFoodComponentArea: {
    width: '90%',
    height: mvs(150, 0.7),
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(20, 0.6),
    marginHorizontal: ms(20, 0.6),
    borderRadius: ms(20, 0.6),
  },
  imageStyle: {
    position: 'absolute',
    height: mvs(140, 0.6),
    width: '100%',
    marginTop: mvs(30, 0.6),
    borderRadius: ms(10, 0.6),
  },
  shareFoodTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    // marginTop: mvs(5, 0.6),
    alignItems: 'flex-start',
  },
  shareFoodButtonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: mvs(40, 0.6),
  },
});
