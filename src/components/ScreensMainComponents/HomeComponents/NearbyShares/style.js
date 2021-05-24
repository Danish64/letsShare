import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  nearBySharesArea: {
    width: '90%',
    height: mvs(400, 0.6),
    marginBottom: mvs(10, 0.6),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
  },

  nearByShareTitleText: {
    width: '100%',
    marginTop: mvs(5, 0.6),
    marginHorizontal: ms(20, 0.6),
  },
  recentlySharedFlatlistArea: {
    width: '100%',
    height: '100%',
    marginBottom: mvs(5, 0.6),
    // backgroundColor: 'green',
  },
});
