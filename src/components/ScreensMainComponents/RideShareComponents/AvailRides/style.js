import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  availRideComponentArea: {
    width: '90%',
    height: mvs(420, 0.6),
    marginBottom: mvs(10, 0.6),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
  },
  myAvailedRidesButtonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: mvs(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BackGroundGrey,
    height: mvs(70, 0.7),
    marginVertical: mvs(15, 0.6),
  },
  availRideTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
  },
  categoriesArea: {
    width: '100%',
    height: mvs(300, 0.6),
    //backgroundColor: 'red',
  },
});
