import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareAssetComponentArea: {
    width: '100%',
    height: mvs(400, 0.7),
    marginBottom: mvs(5, 0.6),
    justifyContent: 'space-between',
  },
  shareAssetRowContainer: {
    width: '100%',
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  shareAssetCardContainer: {
    width: '45%',
    height: '100%',
    borderRadius: mvs(20, 0.6),
    borderWidth: ms(1),
    borderColor: Colors.SearchBarWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    width: '80%',
    height: '80%',
  },
});
