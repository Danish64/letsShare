import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  recentlySharedFoodArea: {
    width: '100%',
    height: mvs(300, 0.7),
    marginBottom: mvs(20, 0.6),
    marginHorizontal: ms(20, 0.6),
  },

  shareFoodTitleText: {
    width: '100%',
    marginTop: mvs(5, 0.6),
    alignItems: 'flex-start',
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
