import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  componentArea: {
    width: '95%',
    height: mvs(110, 3.0),
    marginTop: mvs(10, 0.6),
    marginBottom: mvs(2, 0.6),
    borderRadius: ms(10, 0.7),
    elevation: ms(3),
    marginHorizontal: ms(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'blue',
  },

  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: ms(15, 0.6),
  },

  textStyle: {
    position: 'absolute',

    //marginVertical: mvs(80, 0.6),
  },
});
