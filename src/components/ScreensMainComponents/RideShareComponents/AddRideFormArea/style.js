import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  createRideComponentArea: {
    width: '90%',
    height: mvs(630, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    //backgroundColor: 'pink',
  },
  formArea: {
    width: '100%',
    height: mvs(230, 0.7),
    // backgroundColor: 'lightyellow',
  },
  buttonAreastyle: {
    width: '100%',
    height: mvs(100, 0.7),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: ms(10, 0.6),
    backgroundColor: Colors.White,
    borderWidth: ms(1),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
  },
  myRidesTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    // backgroundColor: 'grey',
  },
  myRidesListArea: {
    width: '100%',
    height: mvs(140, 0.7),
    //backgroundColor: 'grey',
    alignItems: 'center',
  },
  categoryButtonsArea: {
    width: '100%',
    height: mvs(230, 0.7),
    marginVertical: mvs(10, 0.6),
    justifyContent: 'center',
  },
  pngImageArea: {
    width: '100%',
    height: mvs(100, 0.6),
  },
  pngImageAreaLarge: {
    width: '100%',
    height: mvs(180, 0.6),
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
});
