import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  introHeaderContainer: {
    width: '100%',
    height: mvs(100, 0.8),
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: ms(1),
    borderBottomColor: '#e5e5e5',
  },
  introHeaderImageContainer: {
    width: '30%',
    height: '100%',
    paddingHorizontal: ms(3, 0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  introHeaderImageStyle: {
    width: '70%',
    height: '70%',
    borderRadius: ms(55, 0.8),
  },
  introHeaderProfileInfoContainer: {
    width: '70%',
    height: '90%',
    paddingHorizontal: ms(5, 0.8),
    justifyContent: 'center',
  },
});
