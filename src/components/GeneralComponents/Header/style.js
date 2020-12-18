import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  headerArea: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(1),
    borderLeftColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
    padding: ms(5),
  },
  logoArea: {
    marginStart: s(15),
  },
});
