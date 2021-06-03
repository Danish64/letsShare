import {StyleSheet} from 'react-native';
import {mvs, ms} from 'react-native-size-matters';
import {Colors} from 'res/constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#dc143c',
    width: 90,
    flex: 1,
    marginTop: mvs(5, 0.6),
    marginBottom: mvs(5, 0.6),
    marginHorizontal: ms(10, 0.6),
    borderRadius: ms(10, 0.7),
    elevation: ms(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
