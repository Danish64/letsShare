import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  createFoodComponentArea: {
    width: '90%',
    height: mvs(630, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    //backgroundColor: 'pink',
  },
  mySharedFoodButtonArea: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  createdFoodArea: {
    width: '100%',
    marginVertical: mvs(10, 0.6),
  },
  myFoodTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
  },
  myFoodListArea: {
    width: '100%',
    height: mvs(140, 0.7),
    alignItems: 'center',
  },
  selectFoodTypeArea: {
    width: '100%',
    marginVertical: mvs(10, 0.6),
  },
  categoryButtonsArea: {
    width: '100%',
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
  rideNotSelectedText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: mvs(60, 0.6),
  },
});
