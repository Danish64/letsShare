import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  availGoodsComponentArea: {
    width: '90%',
    height: mvs(215, 3.0),
    marginTop: mvs(30, 0.6),
    marginBottom: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
  },
  availGoodsTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
  },
  myAvailedGoodsButtonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: mvs(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BackGroundGrey,
    height: mvs(70, 0.7),
    marginVertical: mvs(15, 0.6),
  },
});
