import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareAssetComponentArea: {
    width: '100%',
    height: mvs(260, 0.7),
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),
    justifyContent: 'space-between',
  },
  shareAssetTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
  },
  shareAssetRowContainer: {
    width: '100%',
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: mvs(15, 0.6),
  },

  shareAssetCardContainer: {
    width: '45%',
    height: '90%',
    borderRadius: mvs(20, 0.6),
    borderWidth: ms(1),
    borderColor: Colors.Black,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: mvs(5, 0.6),
  },
  cardIcon: {
    width: '80%',
    height: '80%',
  },
  cardTitle: {
    marginTop: mvs(5, 0.6),
  },
});
