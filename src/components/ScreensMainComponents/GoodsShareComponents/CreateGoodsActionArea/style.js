import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  createGoodsComponentArea: {
    width: '90%',
    height: mvs(630, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    // backgroundColor: 'pink',
  },
  createdGoodsArea: {
    width: '100%',
    height: mvs(180, 0.7),
    // backgroundColor: 'lightyellow',
  },
  mySharedGoods: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  myGoodsTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    // backgroundColor: 'grey',
  },
  myGoodsListArea: {
    width: '100%',
    height: mvs(140, 0.7),
    //backgroundColor: 'grey',
    alignItems: 'center',
  },
  selectGoodsTypeArea: {
    width: '100%',
    height: mvs(270, 0.7),
    marginVertical: mvs(10, 0.6),
    //backgroundColor: 'blue',
  },
  categoryButtonsArea: {
    width: '100%',
    height: mvs(150, 0.7),
    marginVertical: mvs(10, 0.6),
    justifyContent: 'center',
  },
  pngImageArea: {
    width: '100%',
    height: mvs(200, 0.6),
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '100%',
    height: mvs(120, 0.6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    height: mvs(120, 0.6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
