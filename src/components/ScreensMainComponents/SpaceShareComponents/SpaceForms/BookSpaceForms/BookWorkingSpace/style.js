import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  ComponentArea: {
    width: '90%',
    height: mvs(700, 0.7),
    //marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    //backgroundColor: 'pink',
  },
  buttonAreaStyle: {
    marginHorizontal: ms(20, 0.5),
    marginVertical: mvs(10, 0.5),
  },
});
