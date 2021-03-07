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
  formArea: {
    width: '100%',
    height: mvs(310, 0.7),
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
    borderWidth: ms(0),
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

  textInputAreaBlur: {
  width: '90%',
  height: mvs(90, 0.6),
  marginHorizontal: ms(15, 0.6),
  justifyContent: 'center',
  backgroundColor: Colors.White,
  borderWidth: ms(1),
  borderLeftColor: Colors.White,
  borderRightColor: Colors.White,
  borderBottomColor: Colors.SearchBarWhite,
  borderTopColor: Colors.White,
  padding: ms(5),
},
container: {
  width: '95%',
  height: mvs(50, 3.0),
  marginTop: mvs(10, 0.6),
  marginBottom: mvs(2, 0.6),
  borderRadius: ms(10, 0.7),
  // elevation: ms(3),
  marginHorizontal: ms(8, 0.6),
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  // backgroundColor: 'white',
  // borderWidth: 0.5,
},
});
