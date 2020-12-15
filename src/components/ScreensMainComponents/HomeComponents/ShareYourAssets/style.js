import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareAssetComponentArea: {
    width: '90%',
    height: mvs(260, 0.7),
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),
    justifyContent: 'space-between',
    marginHorizontal: ms(20, 0.6),
  },
  shareAssetTitleText: {
    width: '100%',
    height: '10%',
    alignItems: 'baseline',
  },
  shareAssetActionArea: {
    width: '100%',
    height: '90%',
  },
  shareAssetRowContainer: {
    width: '100%',
    height: mvs(100, 0.7),
    flexDirection: 'row',
    justifyContent: 'space-between',
   // alignItems: 'center',
    marginBottom: mvs(15, 0.6),
  },

  shareAssetCardContainer: {
    width: '45%',
    height: mvs(95, 0.7),
    borderRadius: mvs(20, 0.6),
    borderWidth: ms(1),
    borderColor: Colors.Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    width: '80%',
    height: '80%',
  },
  cardTitle: {
    marginTop: mvs(5, 0.6),
  },
});
