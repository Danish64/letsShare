import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  availRideComponentArea: {
    width: '90%',
    height: mvs(400, 3.0),
    marginTop: mvs(30, 0.6),
    marginBottom: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
  },
  availRideTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
  },
});
