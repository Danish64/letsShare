import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  nearBySharesArea: {
    width: '100%',
    height: mvs(300, 0.7),
    marginBottom: mvs(10, 0.6),
    marginVertical: mvs(15, 0.6),
  },

  shareRideTitleText: {
    width: '100%',
    marginTop: mvs(5, 0.6),
    marginBottom: mvs(15, 0.6),
    alignItems: 'flex-start',
    marginHorizontal: ms(20, 0.6),
  },
  recentlySharedFlatlistArea: {
    width: '90%',
    height: '100%',
    marginBottom: mvs(5, 0.6),
    paddingBottom: ms(10, 0.6),
    paddingEnd: ms(10, 0.5),
    paddingStart: ms(10, 0.6),
    marginHorizontal: ms(10, 0.5),
  },
});
