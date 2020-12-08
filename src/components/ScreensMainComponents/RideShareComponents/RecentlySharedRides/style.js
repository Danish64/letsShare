import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  nearBySharesArea: {
    width: '100%',
    height: mvs(250, 0.7),
    // backgroundColor:'lightyellow',
    marginBottom: mvs(20, 0.6),
  },

  shareRideTitleText: {
    width: '100%',
    marginTop: mvs(5, 0.6),
    //  backgroundColor: "blue",
    alignItems: 'flex-start',
  },
  recentlySharedFlatlistArea: {
    width: '100%',
    height: '100%',
    marginBottom: mvs(5, 0.6),
    //  backgroundColor: "green",
    // padding:ms(5,0.7),
  },
});
