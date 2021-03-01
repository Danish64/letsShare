import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
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
