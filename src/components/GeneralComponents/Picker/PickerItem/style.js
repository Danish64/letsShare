import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';
const FONT_AIRBNB_CEREAL_BLACK = 'AirbnbCereal-Black';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    marginVertical: mvs(10, 0.6),
    backgroundColor: Colors.White,
    borderRadius: ms(15, 0.6),
    padding: ms(25, 0.6),
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: Colors.Primary,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
