import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  createRideComponentArea: {
    width: '90%',
    height: mvs(630, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    // backgroundColor: 'pink',
  },
  createdRidesArea: {
    width: '100%',
    height: mvs(180, 0.7),
    // backgroundColor: 'lightyellow',
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
    justifyContent: 'center',
  },
  selectRideTypeArea: {
    width: '100%',
    height: mvs(270, 0.7),
    marginVertical: mvs(10, 0.6),
    //backgroundColor: 'blue',
  },
  categoryButtonsArea: {
    width: '100%',
    height: mvs(230, 0.7),
    marginVertical: mvs(10, 0.6),
    justifyContent: 'center',
  },
  pngImageArea: {
    width: '100%',
    height: mvs(150, 0.6),
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
});
