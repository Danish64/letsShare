import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: mvs(50, 0.6),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(2),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
  },
  icon: {
    marginRight: ms(10, 0.6),
  },
  placeholder: {
    color: Colors.MediumGrey,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  modalHeading: {
    marginVertical: mvs(40, 0.6),
    marginHorizontal: ms(15, 0.6),
  },
});
