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
    height: mvs(500, 0.7),
    // backgroundColor: 'lightyellow',
  },
  submitButtonArea: {
    marginVertical: mvs(30, 0.6),
  },
  //
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
  uploadImageArea: {
    marginTop: mvs(10, 0.6),
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(2),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
  },
});
