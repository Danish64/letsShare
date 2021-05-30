import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  FlatListStyle: {
    paddingLeft: ms(18, 0.6),
    width: '100%',
  },
  refreshButtonView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  refreshButtonStyle: {
    flexDirection: 'row',
    width: 70,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
