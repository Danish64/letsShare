import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  ProfileSetupComponentArea: {
    width: '90%',
    height: mvs(630, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
  },

  submitButtonArea: {
    marginVertical: mvs(30, 0.6),
  },
});
