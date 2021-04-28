import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  selectRideArea: {
    width: '90%',
    height: mvs(630, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    //backgroundColor: 'pink',
  },
  mySharedRides: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  selectRideTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    //backgroundColor: 'grey',
  },

  scrollViewContainer: {
    marginBottom: mvs(50, 0.5),
  },

  selectRideTypeArea: {
    width: '100%',
    height: mvs(270, 0.7),
    marginTop: mvs(25, 0.6),
    // backgroundColor: 'blue',
  },
  selectRideTypeText: {
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
  },

  pngImageArea: {
    width: '100%',
    height: mvs(200, 0.6),
  },

  imageContainer: {
    width: '100%',
    height: '100%',
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
