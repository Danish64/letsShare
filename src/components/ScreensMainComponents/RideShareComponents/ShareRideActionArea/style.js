import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareRideComponentArea: {
    width: '90%',
    height: mvs(150, 0.7),
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),
    // backgroundColor: 'lightblue',
    marginHorizontal: ms(20, 0.6),
    borderWidth: 1,
    borderRadius: ms(20, 0.6),
  },
  shareRideTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
  },
  shareRideButtonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: mvs(20, 0.6),
  },
});
